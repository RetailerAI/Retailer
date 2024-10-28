export default function SearchFiled() {
    return (
        <div className="shrink text-lg sm:shrink-0">
            <input
                placeholder="Search for item..."
                className="w-44 rounded-full border border-stone-400 px-5 py-1 transition-all focus:w-[14rem] focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2 sm:w-[24rem] sm:focus:w-[26rem]"
            />
        </div>
    );
}
