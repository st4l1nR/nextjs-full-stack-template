'use client'
import React, { useState } from 'react'
import { Input } from '@/components/atoms/input'
import { Field, Label, ErrorMessage } from '@/components/atoms/fieldset'
import { Button } from '@/components/atoms/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
const Page = () => {
  const schema = z.object({
    email: z.string().email('Invalid email').min(1, 'Required'),
    password: z.string().min(1, 'Required'),
  })
  type FormData = z.infer<typeof schema>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (formData: FormData) => {
    setLoading(true)
    try {
      const credentials = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      })
      if (credentials?.error) throw new Error(credentials.error)
      toast.success('Logged in')
    } catch (error: any) {
      toast.error(error.message)
    }
    setLoading(false)
  }

  return (
    <form
      className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <Field>
            <Label>Email address</Label>
            <Input {...register('email')} />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </Field>

          <div>
            <Field>
              <Label>Password</Label>
              <Input type="password" {...register('password')} />
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </Field>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </form>
  )
}
export default Page
