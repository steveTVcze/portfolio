import PhotoshopIcon from '../../public/photoshop.svg'
import Image from 'next/image'

function Photoshop() {
  return <Image src={PhotoshopIcon} alt="photoshop-icon" width="40" height="40" />
}

export default Photoshop