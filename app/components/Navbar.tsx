import { authOptions } from '../lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { buttonVariants } from './ui/Button';
import SignInButton from './ui/SignInButton';
import SignOutButton from './ui/SignOutButton';
import { Icons } from './Icons';
import SearchBar from './ui/SearchBar';
import Image from 'next/image';


const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-center'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>

        <Link href='/' className='display inline-ce group'>
          <div className='w-10 h-10 rounded-full overflow-hidden group-hover:scale-110 transition-transform'>
            <Image src='/favicon.ico' alt='Ayurheals' width={50} height={50} className='w-full h-full' />
          </div>
        </Link>
        <div className="flex-grow">
          <SearchBar />
        </div>
        <div className='hidden md:flex gap-4'>
          <Link
            href='/Products'
            className={buttonVariants({ variant: 'ghost' })}
          >
            Products
          </Link>
          <Link
            href='/Contactus'
            className={buttonVariants({ variant: 'ghost' })}
          >
            Contactus
          </Link>
          <Link
            className={buttonVariants({ variant: 'ghost' })}
            href='/Cart'
          >
            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center cursor-pointer relative'>
              <Icons.ShoppingCart className='mr-2 h-5 w-5' />
              <div className='h=[12px] md:h-[18px] min-w-[12px] md:min-w-[18px] rounded-full bg-red-600 absolute top-2 left-5 md:left-5 
            text-white text-[10px] md:text-[15px] flex justify-center items-center px-[2px] md:px-[5px]'>2
              </div>
            </div>
          </Link>
          {session ? (
            <>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;