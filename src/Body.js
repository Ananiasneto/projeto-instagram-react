import Stories from './Stories';
import SideBar from './SideBar';
import Posts from './Posts';

export default function Body() {
    return (
        <div class="corpo">   
               <div class="esquerda">   
                    <Stories/>
                    <Posts/>
                </div>
                <div class="esquerda">   
                    <SideBar/>
                </div>
        </div>
    );
  }