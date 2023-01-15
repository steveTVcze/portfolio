import { Button } from "@chakra-ui/button";
import { useRouter } from 'next/router'
import Skills from '../../components/Skills'
import Buttons from '../../components/ShareButtons'
export default function Home() {
    const router = useRouter()
    return (
        <div>
            <div className="texts">
            <h1> Hi, my name is Štěpán Zakouřil </h1>
            <div className="intro">
            <h2> I am a freelance Czech programmer, who loves music, art, learning langues and making awesome projects. </h2>
            </div>
            </div>
            <div className="btnMore">
            <Button onClick={() => router.push('/About')}> I want to know more! </Button>
            </div>
            <div className="skills">
            <Skills />
            </div>
        </div>
      );
}
