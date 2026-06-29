import { affiliates } from "@/data/affiliates"
import { AffiliateRow } from "@/components/table-rows"

export default function AffiliatesPage() {
  return (
    <>
      <div className="section-header">
        <span className="section-title">Senarai Afiliasi Terbaik</span>
        <span className="badge badge-accent">Malaysia</span>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th><th>Kreator</th><th>Followers</th><th>Total Views</th><th>Est. Jualan</th><th>Kategori Terbaik</th><th>Status</th>
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
