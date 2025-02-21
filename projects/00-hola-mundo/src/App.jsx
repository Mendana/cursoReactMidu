import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App(){
    return(
        <section class="App">
            <TwitterFollowCard userName="midudev" isFollowing>
                Miguel Ángel Durán	
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb" isFollowing>
                Pablo Hernández
            </TwitterFollowCard>
            
            <TwitterFollowCard>
                Juanpe
            </TwitterFollowCard>
        </section>
    )
}