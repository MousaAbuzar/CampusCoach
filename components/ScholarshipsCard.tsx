import { scholarships } from "../data/scholarships";
import SaveButton from "./SaveButton";


function formatMoneyRange(
  min: number | null | undefined,
  max: number | null | undefined,
  fallback: string
) {
  const text = (fallback ?? "").toLowerCase();

  if (min == null || max == null) return fallback || "Amount varies";

  if (min !== max) {
    return `$${min.toLocaleString()} – $${max.toLocaleString()}`;
  }

  const single = `$${min.toLocaleString()}`;

  if (text.includes("up to")) return `Up to ${single}`;
  if (text.includes("from")) return `From ${single}`;

  return single;
}


// create a card

export default function ScholarshipsCard(props: {object : any}) {


    return (
    
        
    <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        

        <div className="flex items-start justify-between gap-2">
          <h2 className="mb-3 text-2xl font-semibold">{props.object.title}</h2>
  <SaveButton scholarshipId={props.object.id} />
</div>


        <div className="space-y-1 text-sm text-zinc-700">
            <p><span className="font-medium text-zinc-900">provider:</span> {props.object.provider}</p>
            <p><span className="font-medium text-zinc-900">amount:</span>{" "} {formatMoneyRange(props.object.valueMin, props.object.valueMax, props.object.amountText)}</p> 
            <p><span className="font-medium text-zinc-900">deadline:</span> {props.object.deadline}</p>
            <p><span className="font-medium text-zinc-900">tags:</span> {props.object.tags?.join(" • ") ?? "N/A"}</p>

        </div>
    </div>
    )

};

