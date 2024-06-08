import { Button } from '../components/ui/button'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
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
const Login = () => {
	const [form, setForm] = useState<Form>({ email: '', password: '' })
	return (
		<div className='h-screen w-full place-items-center justify-center flex'>
			<Card className='mx-auto max-w-sm'>
				<CardHeader>
					<CardTitle className='text-2xl'>Login</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						className='grid gap-4'
						onSubmit={async e => {
							e.preventDefault()
							try {
								await signInWithEmailAndPassword(
									auth,
									form.email,
									form.password,
								)
								console.log('signed in  successfully')
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
								<Link
									to='#'
									className='ml-auto inline-block text-sm underline'
								>
									Forgot your password?
								</Link>
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
							Login
						</Button>
						<Button
							variant='outline'
							onClick={() =>
								signInWithPopup(auth, googleAuthProvider)
							}
							className='w-full'
							type='button'
						>
							Login with Google
						</Button>
					</form>
					<div className='mt-4 text-center text-sm'>
						Don&apos;t have an account?{' '}
						<Link to='/signup' className='underline'>
							Sign up
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
export default Login
