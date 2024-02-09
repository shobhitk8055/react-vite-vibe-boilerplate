import { useNotificationStore } from '@/stores/notifications'
import { Button } from '@/vibe/components'

export const Landing = () => {
  const { addNotification } = useNotificationStore();
  return (
    <div title="  ">
      <Button>Submit</Button>
    </div>
  )
}