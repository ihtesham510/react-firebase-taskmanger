import { Button } from '../components/ui/button'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, googleAuthProvider } from '@/lib/firebase-config'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

interface Form {
	email: string
	password: string
}
const SignUp = () => {
	const [form, setForm] = useState<Form>({ email: '', password: '' })
	return (
		<div className='h-screen w-full place-items-center justify-center flex'>
			<Card className='mx-auto max-w-sm'>
				<CardHeader>
					<CardTitle className='text-2xl'>SignUp</CardTitle>
					<CardDescription>
						Enter your email below to create your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						className='grid gap-4'
						onSubmit={async e => {
							e.preventDefault()
							try {
								await createUserWithEmailAndPassword(
									auth,
									form.email,
									form.password,
								)
								console.log('user created successfully')
							} catch (err) {
								console.log(err)
							}
						}}
					>
						<div className='grid gap-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								id='email'
								type='email'
								placeholder='alexa@example.com'
								required
								value={form.email}
								onChange={e =>
									setForm(prev => ({
										...prev,
										email: e.target.value,
									}))
								}
							/>
						</div>
						<div className='grid gap-2'>
							<div className='flex items-center'>
								<Label htmlFor='password'>Password</Label>
							</div>
							<Input
								id='password'
								type='password'
								required
								value={form.password}
								onChange={e =>
									setForm(prev => ({
										...prev,
										password: e.target.value,
									}))
								}
							/>
						</div>
						<Button type='submit' className='w-full'>
							SignUp
						</Button>
						<Button
							variant='outline'
							onClick={() =>
								signInWithPopup(auth, googleAuthProvider)
							}
							className='w-full'
							type='button'
						>
							SignUp with Google
						</Button>
					</form>
					<div className='mt-4 text-center text-sm'>
						Don&apos;t have an account?{' '}
						<Link to='/login' className='underline'>
							Sign in
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
export default SignUp
