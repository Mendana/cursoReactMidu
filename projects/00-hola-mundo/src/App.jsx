import './App.css';

export function App(){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src="https://unavatar.io/midudev" alt="El ávatar de midudev" className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>Miguel Ángel Durán</strong>
                    <span className='tw-followCard-infoUserName'>@midudev</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}