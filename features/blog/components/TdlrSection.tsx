const TdlrSection = ({tdlrContent}: {tdlrContent: string}) => {
  return (
    <div className="bg-accent-50 p-6 border-t-4 border-accent-500 mb-3">
      <h2 className="mb-6 text-heading-xs">Insights</h2>
      <p className="text-label-md">
        {tdlrContent}
      </p>
    </div>
  )
}

export default TdlrSection
