import ContentWrapper from '@/features/admin/Layout/ContentWrapper'
import { useNotificationStore } from '@/stores/notifications'
import { Button } from '@/vibe/components'

export const Dashboard = () => {
  const { addNotification } = useNotificationStore();
  return (
    <ContentWrapper title="Dashboard">
      <p>Dashboard</p>
      <Button onClick={() => {
        addNotification({
          type: "success",
          title: "Success",
          message: "The success is here!"
        })
      }}>Open</Button>
    </ContentWrapper>
  )
}