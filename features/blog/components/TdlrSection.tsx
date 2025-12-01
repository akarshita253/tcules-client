const TdlrSection = ({tdlrContent}: {tdlrContent: string}) => {
  return (
    <div className="bg-secondary-green-50 p-6 border-t-4 border-[#04EC50] my-3">
      <h2 className="mb-6 text-2xl font-semibold">Insights</h2>
      <p>
        {tdlrContent}
      </p>
    </div>
  )
}

export default TdlrSection
