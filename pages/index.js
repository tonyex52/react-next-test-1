import PageView from 'containers/PageView'

const Index = () => (
  <PageView
    title="首頁"
    navList={[
      { name: '其他', url: '/other' },
      { name: '不知道怎麼命名', url: 'unknown' },
    ]}
  />
)

export default Index
