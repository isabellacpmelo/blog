/** @format */

type SpinLoaderProps = {
  containerClasses?: string
}

export function SpinLoader({ containerClasses = '' }: SpinLoaderProps) {
  console.log('Header')
  const classes = 'flex items-center justify-center' + ' ' + containerClasses
  return (
    <div className={classes}>
      <div className='w-10 h-10 border-4 border-t-transparent border-b-slate-900 rounded-full animate-spin' />
    </div>
  )
}
