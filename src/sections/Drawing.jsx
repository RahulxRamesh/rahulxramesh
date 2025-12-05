import { Tldraw } from 'tldraw'
import '@tldraw/tldraw/tldraw.css';
import { useSyncDemo } from '@tldraw/sync'
import styles from '../style';

const Drawing = () => {
  const TLDRAW_LICENSE_KEY = import.meta.env.VITE_TLDRAW_LICENSE_KEY;
  const store = useSyncDemo({ roomId: 'drawing-room' })
  const animals = ['Tiger', 'Lion', 'Eagle', 'Wolf', 'Bear', 'Fox', 'Hawk', 'Shark', 'Panther', 'Falcon', 'Cobra', 'Jaguar', 'Cheetah', 'Rhino', 'Elephant'];
  const username = animals[Math.floor(Math.random() * animals.length)];
  const handleMount = (editor) => {
    editor.setCurrentTool('draw')
    editor.user.updateUserPreferences({ name: username })
  }
  return (
    
      <section id='drawing' className={`flex md:flex-row flex-col gap-6 md:gap-10 items-start ${styles.paddingProjectsY} ${styles.paddingX}`}>
           <div style={{ position: "relative", width: "100%", height: "40vh" }}>
			<Tldraw persistenceKey="example" store={store} onMount={handleMount} licenseKey={TLDRAW_LICENSE_KEY} />
		    </div>
      </section>
  )
}

export default Drawing