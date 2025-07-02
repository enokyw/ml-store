interface Specification {
  label: string
  value: string
}

interface ProductSpecificationsProps {
  specifications: Specification[]
}

export default function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-base-content mb-4">
        Specifications
      </h3>
      
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <tbody>
            {specifications.map((spec, index) => (
              <tr key={index}>
                <td className="font-medium text-base-content">
                  {spec.label}
                </td>
                <td className="text-base-content/80">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 