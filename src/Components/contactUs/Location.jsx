function Location() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[100%] sm:max-w-[700px] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <div className="px-8 lg:p-2">
          <div className="h-[380] p-2 bg-gray-100 border rounded-sm shadow-md overflow-hidden">
            <iframe
              width="100%"
              height="350"
              style={{
                borderRadius: "3px",
                border: "none",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Arab%20Ali%20Hotel,%208465+PWG,%20Harar+(Arab%20Ali%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
