import queryString from 'query-string'

export default function mongoQuery(q?: any) {
  if (!q) return {}
  function isIsoDate(str: string) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false
    var d = new Date(str)
    return d.toISOString() === str
  }
  const queryObject = queryString.parse(q, {
    arrayFormat: 'bracket',
    parseBooleans: true,
    parseNumbers: true,
  })
  const queryArray = Object.entries(queryObject).map(([key, value]) => {
    if (key == 's') {
      return { $text: { $search: value } }
    }
    if (Array.isArray(value)) {
      if (key.indexOf('.') !== -1) {
        const embedEntries: any = key.split('.')
        return {
          [embedEntries[0]]: {
            $elemMatch: {
              [embedEntries[1]]: { $gte: value[0], $lte: value[1] },
            },
          },
        }
      }
      if (isIsoDate(value[0] as any)) {
        return {
          [key]: {
            $gte: new Date(value[0] as any),
            $lte: new Date(value[1] as any),
          },
        }
      } else
        return {
          [key]: {
            $gte: parseInt(value[0] as any),
            $lte: parseInt(value[1] as any),
          },
        }
    }

    if (key.indexOf('/') != -1) {
      if (key.indexOf('!')) {
        return { [key.replace('!/', '')]: { $nin: [value] } }
      }
      return { [key.replace('/', '')]: { $in: [value] } }
    }

    if (key.indexOf('*') != -1) {
      const values = (value as string).split(',')
      if (key.indexOf('!') != -1) {
        return {
          [key.replace('!*', '')]: {
            $all: values.map((value) => ({ $elemMatch: { $ne: value } })),
          },
        }
      }

      return { [key.replace('*', '')]: { $all: values } }
    }
    if (key.indexOf('!') != -1) {
      return {
        [key.replace('!', '')]: { $ne: value == 'null' ? null : value },
      }
    }
    return {
      [key]: value == 'null' ? null : value,
    }
  })
  var query = {}
  queryArray.forEach((item) => {
    query = { ...query, ...item }
  })
  return query
}
