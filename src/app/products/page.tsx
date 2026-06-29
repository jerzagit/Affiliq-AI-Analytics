import { products } from "@/data/products"
import { ProductRow } from "@/components/table-rows"

export default function ProductsPage() {
  return (
    <>
      <div className="section-header">
        <span className="section-title">Top 10 Produk Viral Malaysia</span>
        <span className="badge badge-accent">Dikemas kini real-time</span>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th><th>Produk</th><th>Kategori</th><th>Est. Jualan</th><th>Est. GMV</th><th>Viral Score</th><th>Confidence</th><th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <ProductRow key={p.id} product={p} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
