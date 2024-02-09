import { Table } from '@/components/Elements/SimpleTable/Table'
import ContentWrapper from '@/components/Layout/ContentWrapper'

export const Users = () => {
  return (
    <ContentWrapper title="Users">
      <h3 className='pb-3'>Users</h3>
     <Table />
    </ContentWrapper>
  )
}
