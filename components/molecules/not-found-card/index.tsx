import { ImCrying } from 'react-icons/im'
import Card from 'components/atoms/card'

const NotFoundCard = () => (
  <Card className="flex flex-col">
    <div className="flex flex-row items-center">
      <ImCrying />
      <p className="ml-2 font-bold">見つかりませんでした…</p>
    </div>
    <p className="mt-2 text-sm text-natural-gray">
      アイドル・ユニット名が間違っているか、
      <a
        className="underline hover:text-imas transition-colors"
        href="https://sparql.crssnky.xyz/imas/"
        target="_blank"
        rel="noopener noreferrer"
      >
        im@sparql
      </a>
      にイメージカラーの情報が登録されていないようです。
    </p>
  </Card>
)

export default NotFoundCard
