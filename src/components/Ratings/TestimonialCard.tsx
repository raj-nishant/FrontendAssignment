const TestimonialCard: React.FC<{
  rating: string;
  quote: string;
  description: string;
  authorName: string;
  authorRole: string;
  imageUrl: string;
}> = ({ rating, quote, description, authorName, authorRole, imageUrl }) => {
  return (
    <div className="flex flex-col flex-1 p-5 bg-white rounded-3xl border-solid shadow-sm border-[0.722px] border-[color:var(--Neutral-Colors-Color-300,#F0F0F6)] max-md:px-5">
      <div className="text-2xl leading-7 text-slate-800 tracking-[2.89px]">
        {rating}
      </div>
      <div className="mt-9 text-2xl md:leading-8 text-slate-800">
        &quot;{quote}&quot;
      </div>
      <div className="mt-2 text-sm md:leading-6 text-gray-500">
        &quot;{description}&quot;
      </div>
      <div className="shrink-0 mt-2 h-px bg-zinc-200" />
      <div className="flex gap-5 justify-between items-start mt-6">
        <img
          loading="lazy"
          src={imageUrl}
          className="mt-2.5 aspect-square w-[33px]"
        />
        <div className="flex flex-col flex-1">
          <div className="text-xl leading-7 text-slate-800">{authorName}</div>
          <div className="mt-3.5 text-sm leading-7 text-neutral-600">
            {authorRole}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
