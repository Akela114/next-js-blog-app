import localFont from 'next/font/local'

const workSans = localFont({
  src: './WorkSans.ttf',
})

const plusJakartaSans = localFont({
  src: './PlusJakartaSans.ttf',
})

const fontStyles = {
  workSans: workSans.className,
  plusJakartaSans: plusJakartaSans.className,
}

export default fontStyles
