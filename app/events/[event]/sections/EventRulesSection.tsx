export default function EventRulesSection(){
    return(
        <div className="max-w-2xl mx-auto text-center mt-32">
  <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl xl:text-5xl sm:tracking-tight">
    Event Rules
  </h1>
  <ul className="mt-12 text-lg leading-7 text-black/70 lg:leading-8 lg:text-xl list-disc list-inside text-left ">
    <li>Mobile Usage is strictly prohibited.</li>
    <li>Usage of ChatGPT or any other AI is strictly prohibited.</li>
    <li>Be on time.</li>
  </ul>
  <div className="mt-8">
    <a href="#" target="_blank" className="block">
      <button
        className="flex content-center transition items-center justify-center text-center px-8 py-4 text-xl font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 mx-auto px-8"
        style={{ flexShrink: 0 }}
      >
        <div className="flex items-center justify-start space-x-1.5">
          <span>Download Rule Book</span>
        </div>
      </button>
    </a>
  </div>
</div>

    )
}