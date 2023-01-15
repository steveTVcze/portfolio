import { Progress } from '@chakra-ui/react'
import Blender from '../Blender/index'
import Csharp from '../Csharp/index'
import Photoshop from '../Photoshop/index'
import Html from '../Html/index'

export default function Skills(){
    return(
        <div>
            <div className='skillsH2'>
            <h2> Skills </h2>
            </div>
            <div className='skillsContainer'>
                <div>
                    Blender
                    <div className='imagee'>
                    <Blender />
                    </div>
                </div>
                <div>
                    C#
                    <div className='imagee'>
                    <Csharp />
                    </div>
                </div>
                <div>
                    Photoshop
                    <div className='imagee'>
                    <Photoshop />
                    </div>
                </div>
                <div>
                    HTML & CSS
                    <div className='imagee'>
                    <Html />
                    </div>
                </div>
            </div>
        </div>
    );
}