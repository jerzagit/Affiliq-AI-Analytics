import { affiliates } from "@/data/affiliates"
import { AffiliateRow } from "@/components/table-rows"

export default function AffiliatesPage() {
  return (
    <>
      <div className="section-header">
        <span className="section-title">Affiliate Leaderboard</span>
        <span className="badge badge-accent">Malaysia</span>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th><th>Creator</th><th>Followers</th><th>Total Views</th><th>Est. Sales</th><th>Top Category</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {affiliates.map((a, i) => (
              <AffiliateRow key={a.id} affiliate={a} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
