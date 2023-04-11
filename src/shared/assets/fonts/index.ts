import localFont from 'next/font/local'

const workSans = localFont({
  src: './WorkSans.ttf',
})

const plusJakartaSans = localFont({
  src: './PlusJakartaSans.ttf',
})

const sourceSerifPro = localFont({
  src: [
    {
      path: './SourceSerifPro-Regular.ttf',
      weight: '500',
      style: 'regular',
    },
    {
      path: './SourceSerifPro-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
})

const fontStyles = {
  workSans: workSans.className,
  plusJakartaSans: plusJakartaSans.className,
  sourceSerifPro: sourceSerifPro.className,
}

export default fontStyles
