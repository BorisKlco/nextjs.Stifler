type FilterProps = {
  label: String;
};

export default function Filter({ label }: FilterProps) {
  return (
    <>
      <div className="flex w-full justify-center font-xl text-black bg-wfill rounded select-none cursor-pointer">
        <h2>{label}</h2>
      </div>
    </>
  );
}
