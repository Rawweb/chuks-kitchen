import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import signInImage from '../../assets/sign-in.png';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className='min-h-screen bg-soft-gray'>
      <div className='grid md:grid-cols-2'>
        {/* Desktop left panel */}
        <div className='relative hidden md:block'>
          <img
            src={signInImage}
            alt='Family enjoying a meal'
            className='h-full w-full object-cover'
          />

          <div className='absolute inset-0 bg-primary-orange/70' />

          <div className='absolute inset-0 flex items-center justify-center px-10'>
            <div className='max-w-md text-center text-white'>
              <p className='mt-4 text-5xl font-semibold'>
                Chuks Kitchen
              </p>
              <p className='mt-2 text-lg leading-relaxed'>
                Your journey to delicious, authentic Nigerian meals
                starts here. Sign up or log in to order your favorites
                today!
              </p>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className='flex items-center justify-center px-5 py-8 sm:px-8'>
          <div className='w-full max-w-md'>
            <div className='text-center'>
              <Link
                to='/'
                className='font-island text-4xl md:text-5xl text-primary-orange leading-none'
              >
                Chuks Kitchen
              </Link>
              <h1 className='mt-2 text-3xl md:text-4xl font-semibold text-charcoal'>
                Login your account
              </h1>
            </div>

            <form className='mt-7 space-y-4'>
              <div>
                <label
                  htmlFor='email-or-phone'
                  className='mb-1.5 block text-sm text-dark-gray'
                >
                  Email or phone number
                </label>
                <div className='flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-3'>
                  <Mail size={16} className='text-dark-gray' />
                  <input
                    id='email-or-phone'
                    type='text'
                    placeholder='name@gmail.com'
                    className='w-full bg-transparent text-sm text-charcoal outline-none'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='mb-1.5 block text-sm text-dark-gray'
                >
                  Password
                </label>
                <div className='flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-3'>
                  <Lock size={16} className='text-dark-gray' />
                  <input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='******'
                    className='w-full bg-transparent text-sm text-charcoal outline-none'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword((prev) => !prev)}
                    className='text-dark-gray'
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? (
                      <Eye size={16} />
                    ) : (
                      <EyeOff size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* No route yet by request */}
              <button
                type='button'
                className='block ml-auto text-xs text-primary-blue hover:text-soft-blue'
              >
                Forgot Password?
              </button>

              <button
                type='button'
                className='w-full rounded-md bg-primary-orange py-3 text-sm font-medium text-white hover:opacity-90 transition'
              >
                Continue
              </button>
            </form>

            <div className='mt-5'>
              <div className='relative text-center text-xs text-dark-gray'>
                <span className='bg-soft-gray px-2 relative z-10'>
                  Or continue with
                </span>
                <div className='absolute left-0 right-0 top-1/2 z-0 h-px -translate-y-1/2 bg-gray-300' />
              </div>

              <div className='mt-4 space-y-3'>
                <button
                  type='button'
                  className='flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-3 text-sm text-charcoal'
                >
                  <span className='font-bold text-primary-orange'>
                    G
                  </span>
                  Continue with Google
                </button>

                <button
                  type='button'
                  className='flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white py-3 text-sm text-charcoal'
                >
                  <span className='font-bold text-primary-blue'>
                    f
                  </span>
                  Continue with Apple
                </button>
              </div>
            </div>

            <p className='mt-4 text-center text-xs text-dark-gray'>
              Don&apos;t have an account?{' '}
              <Link
                to='/sign-up'
                className='text-primary-blue hover:text-soft-blue'
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
