type SpinLoaderProps = {
  className?: string
}

export function SpinLoader({ className = '' }: SpinLoaderProps) {
  console.log('Header')
  const classes = 'flex items-center justify-center' + ' ' + className
  return (
    <div className={classes}>
      <div className='w-10 h-10 border-4 border-t-transparent border-b-slate-900 rounded-full animate-spin' />
    </div>
  )
}
