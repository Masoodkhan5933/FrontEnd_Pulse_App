import React from "react";

function Features() {
  return (
    <div className="py-10 flex flex-col justify-center items-center text-center  border-b border-gray-300">
      <h1 className="w-auto font-helvetica text-[4vw] font-bold mb-4">
        Can your spreadsheets
        <br />
        do this?
      </h1>
      <p className="w-[70%] font-helvetica text-m mb-8">
        Pulse is like your cash flow spreadsheet, except the math isn’t wrong.
        Also, Pulse has:
      </p>

      <div className="w-full flex justify-center">
        <div className="text-left w-[75vw] grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className=" flex flex-col justify-center items-center p-3 text-center">
            <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="a">
                  <stop stop-color="#23EA76" offset="0%"></stop>
                  <stop stop-color="#00AB6A" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                d="M341 3128v15h-20v-15h9v-5h12v-3h-15v-21h32v21h-15v3h12v5h9v15h-20v-15h9v-3h-22v3h9zm-2 2h-16v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h16v-11zm24 11v-11h-16v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h16zm-6-40h-28v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h28v-17zm-22.644 15.115l-1.561-1.25 4.997-6.242 3.702 2.744 4.921-6.161 3.573 4.362 3.816-4.63 1.543 1.273-5.364 6.507-3.548-4.332-4.583 5.737-3.703-2.746-3.793 4.738zm6.536-3.994l1.376-.18-.774-.574-.602.754zm-13.379 27.024l-.886-.464 1.989-3.796 2.21 1.612 1.938-3.686 2.426 1.836 1.43-2.952.9.436-1.962 4.049-2.457-1.86-1.928 3.667-2.21-1.61-1.45 2.768zm24 0l-.886-.464 1.989-3.796 2.21 1.612 1.938-3.686 2.426 1.836 1.43-2.952.9.436-1.962 4.049-2.457-1.86-1.928 3.667-2.21-1.61-1.45 2.768z"
                transform="translate(-321 -3099)"
                fill="url(#a)"
                fill-rule="evenodd"
              ></path>
            </svg>
            <h2 className="font-helvetica-neue text-xl font-bold ">
              Multiple Cash Flow Views
            </h2>
            <p className="font-helvetica text-sm mb-4">
              Monitor your cash flow on a yearly, monthly, weekly, daily
              transactional basis.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center  p-3 text-center">
            <svg width="45" height="48" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  x1="93.945%"
                  y1="0%"
                  x2="6.055%"
                  y2="100%"
                  id="a"
                >
                  <stop stop-color="#23EA76" offset="0%"></stop>
                  <stop stop-color="#00AB6A" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                d="M705 3138h3v1h-3v2h6v-26h-6v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2h3v1h-3v2zm29 0v-2h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3v-2h-3v-1h3v-2h-6v26h6v-2h-3v-1h3zm-11-18h-2v2h2v-2zm1-1v4h-4v-4h4zm-1 6h-2v2h2v-2zm1-1v4h-4v-4h4zm-1-14h-2v2h2v-2zm1-1v4h-4v-4h4zm-1 6h-2v2h2v-2zm1-1v4h-4v-4h4zm-6 6h-2v2h2v-2zm1-1v4h-4v-4h4zm-1 6h-2v2h2v-2zm1-1v4h-4v-4h4zm-1-14h-2v2h2v-2zm1-1v4h-4v-4h4zm-1 6h-2v2h2v-2zm1-1v4h-4v-4h4zm-6 16h13v-23h-13v23zm0 2v9h2v-7h1v7h3v-6h1v6h3v-7h1v7h2v-9h-13zm11-27h4v8h8v28h6v2h-45v-2h6v-28h8v-8h4v-4h4v-6h1v6h4v4zm-2 0v-2h-5v2h5zm-6 29h7v1h-7v-1z"
                transform="translate(-697 -3095)"
                fill="url(#a)"
                fill-rule="nonzero"
              ></path>
            </svg>
            <h2 className="font-helvetica-neue text-xl font-bold ">
              Cunstomers and Projects
            </h2>
            <p className="font-helvetica text-sm mb-4">
              Run cash flow reports on customers and projects to see how
              profitable they’re going to be.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center  p-3 text-center">
            <svg width="45" height="41" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  x1="100%"
                  y1="8.494%"
                  x2="0%"
                  y2="91.506%"
                  id="a"
                >
                  <stop stop-color="#23EA76" offset="0%"></stop>
                  <stop stop-color="#00AB6A" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                d="M1085 3141h8v-32h4v32h8v-27h4v27h11v2h-45v-2h6v-23h4v23zm1-12h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0-10h4v1h-4v-1zm0-2h4v1h-4v-1zm0 14h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm12-22h4v1h-4v-1zm0-2h4v1h-4v-1zm0 14h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm12-10h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm0-10h4v1h-4v-1zm0 12h4v1h-4v-1zm-26-28h3v3h-3v-3zm12-9h3v3h-3v-3zm12 5h3v3h-3v-3z"
                transform="translate(-1075 -3102)"
                fill="url(#a)"
                fill-rule="nonzero"
              ></path>
            </svg>
            <h2 className="font-helvetica-neue text-xl font-bold ">
              Visual Reports
            </h2>
            <p className="font-helvetica text-sm mb-4">
              With our easy-to-understand reports, you can see cash moving in
              and out of your business.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center  p-3 text-center">
            <svg width="52" height="47" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M341.54 3316.404v-3.618c-4.188-.358-7.112-2.471-8.375-6.089l2.671-1.36c.541 2.65 2.96 4.512 5.703 5.014v-8.31c-3.718-.788-7.436-1.79-7.436-6.017 0-3.546 2.78-6.411 7.436-6.805v-3.618h2.49v3.654c3.646.286 5.776 1.898 7.436 4.942l-2.346 1.827c-1.19-2.722-2.563-4.012-5.09-4.334v8.417c3.719.788 7.473 1.827 7.473 6.16 0 3.726-2.96 6.161-7.472 6.52v3.617h-2.49zm0-16.798v-7.952c-3.105.287-4.693 1.791-4.693 4.155 0 2.328 2.093 3.188 4.692 3.797zm2.49 10.816c2.923-.25 4.764-1.432 4.764-3.94 0-2.4-2.13-3.295-4.764-3.904v7.844zm-8.266-25.416c.154 1.393-.534 2.466-1.91 2.466-.926 0-1.6-.418-2.217-.822-.463.501-1.137.822-1.98.822-.954 0-1.628-.474-1.628-1.254 0-.766.716-1.281 1.727-1.281.52 0 .94.083 1.291.209v-.14c0-.46-.112-.863-.393-1.35h-2.274v-1.213h1.39c-.491-.682-.646-1.142-.646-1.685 0-1.518 1.18-2.758 3.2-2.758 1.713 0 2.752.766 3.131 2.34l-1.586.752c-.267-1.114-.702-1.63-1.6-1.63-.885 0-1.446.488-1.446 1.254 0 .432.168.808.688 1.56.042.056.084.112.112.167h2.709v1.212h-2.078c.113.32.155.64.155.975 0 .376-.07.752-.197 1.1.393.223.786.404 1.306.404.702 0 1.025-.376 1.01-1.24l1.236.112zm-6.008 1.63c.491 0 .828-.195 1.039-.53-.323-.167-.66-.292-1.04-.292-.406 0-.603.153-.603.39 0 .279.253.432.604.432zm-7.366 15.31l.758-.056h1.727v.836h-2.71v.96h2.71v.795h-2.71v1.616h-1.81v-1.616h-2.695v-.794h2.695v-.961h-2.695v-.836h1.712l.758.056-3.13-5.043h2.035l1.573 3.065.645 1.407h.028l.632-1.421 1.572-3.05h2.036l-3.13 5.042zm10.552 19.335h-1.782v.92h2.526v1.295h-2.526V3325h-1.895v-1.504h-1.236v-1.296h1.236v-.919h-1.236v-1.379h1.236v-4.095h3.677c2.19 0 3.411.975 3.411 2.744 0 1.755-1.22 2.73-3.41 2.73zm-1.782-3.97v2.591h1.488c1.193 0 1.74-.404 1.74-1.295 0-.892-.547-1.296-1.74-1.296h-1.488zm21.033-38.316h7.019v.995h-7.019v-.995zm-.782 2.915h8.673v1.005h-2.657v3.363c0 .258.11.388.341.388h1.103c.12 0 .22-.08.28-.23.071-.158.121-.646.141-1.452l.943.299c-.07 1.124-.2 1.79-.381 2-.18.199-.441.308-.792.308h-1.595c-.711 0-1.062-.368-1.062-1.094v-3.582h-1.484v.199c-.05 1.263-.331 2.278-.843 3.034-.5.697-1.303 1.244-2.426 1.632l-.562-.875c1.083-.379 1.805-.856 2.186-1.413.381-.617.582-1.403.622-2.378v-.2h-2.487v-1.004zm2.022 35.27h3.256c-.07-.432-.238-.766-.519-1.003-.365-.306-.884-.446-1.572-.446h-1.502l.309-.919h6.667l-.309.92h-1.95c.294.39.477.877.533 1.448h1.74l-.308.92h-1.46a2.415 2.415 0 0 1-.604 1.225c-.45.446-1.039.752-1.783.92.113.083.323.334.632.724l3.032 3.788h-2.232l-2.513-3.287a2.798 2.798 0 0 0-.715-.696 1.568 1.568 0 0 0-.899-.293v-1.086h.87c.885 0 1.545-.154 1.98-.46.295-.209.491-.488.575-.836h-3.537l.309-.92zm14.023-13.827l1.544.487c-.463 1.658-1.895 2.535-3.608 2.535-2.105 0-3.523-1.142-4-3.078h-1.278v-1.017h1.11c-.015-.209-.029-.418-.029-.64v-.335h-1.08v-1.017h1.207c.42-2.13 1.867-3.385 4.042-3.385 1.727 0 3.075.78 3.538 2.173l-1.488.683c-.225-.975-1.01-1.435-1.923-1.435-1.193 0-2.022.697-2.345 1.964h3.327l-.337 1.017h-3.13c-.014.111-.014.223-.014.334 0 .223.014.432.028.641h2.878l-.31 1.017h-2.371c.35 1.058 1.095 1.657 2.218 1.657.926 0 1.754-.529 2.02-1.601z"
                transform="translate(-317 -3278)"
                fill="url(#a)"
                fill-rule="nonzero"
              ></path>
            </svg>
            <h2 className="font-helvetica-neue text-xl font-bold ">
              Currency Conversion
            </h2>
            <p className="font-helvetica text-sm mb-4">
              If your business operates on multiple currencies, we have you
              covered with today’s exchange rates.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-3 text-center">
            <svg
              width="52"
              height="47"
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-500 mb-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.777 10a2.227 2.227 0 11-4.454 0 2.227 2.227 0 014.454 0zm10.68-.798c-.393-.515-1.035-.783-1.869-.9L14.076 6.19a2.548 2.548 0 00-2.255-.515l-1.69.684c-.826-.674-1.957-1.03-3.33-1.07l-.594-2.38C6.02 1.377 5.744.602 5.218.1a.67.67 0 00-.925.17l-2.573 3.527c-.474.65-.163 1.304.17 1.634l3.935 4.267a1.15 1.15 0 00.293.202l-.2.292-1.465 1.724a1.85 1.85 0 00-.496 1.49l.137 1.29a1.29 1.29 0 001.072 1.162l2.487.566c.246.056.5.084.756.084h.315c.255 0 .51-.028.756-.084l2.487-.566a1.29 1.29 0 001.072-1.162l.137-1.29a1.85 1.85 0 00-.496-1.49l-1.465-1.724-.2-.292a1.15 1.15 0 00.293-.202l3.935-4.267c.332-.33.644-.984.17-1.634l-2.573-3.527a.67.67 0 00-.925-.17c-.526.502-.802 1.277-.368 2.097l-.595 2.38c-1.373.04-2.504.396-3.33 1.07l-1.69-.684a2.548 2.548 0 00-2.255.515L3.543 9.202c-.834.117-1.476.385-1.869.9a.748.748 0 00-.055.79c.077.135.196.243.34.315.183.092.4.114.6.06l1.643-.374 1.804.19a.77.77 0 00.06.012l.189.014h.094c.166 0 .329-.027.482-.08l1.58-.36 1.877 2.207a.15.15 0 00.105.053h2.23a.15.15 0 00.104-.053l1.877-2.207 1.58.36a.801.801 0 00.482.08h.094l.189-.014c.2-.016.415-.032.635-.046l1.804-.19 1.643.374c.199.045.416.033.6-.06.144-.072.263-.18.34-.315a.748.748 0 00-.055-.79zm-.61.505a.986.986 0 11-1.972 0 .986.986 0 011.972 0z"
              />
            </svg>
            <h2 className="font-helvetica-neue text-xl font-bold mb-2">
              Invite your Team
            </h2>
            <p className="font-helvetica text-sm mb-4">
              Invite your team to help out, or showcase your projections to
              investors by giving them read-only access.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center p-3 text-center">
            <svg
              width="52"
              height="47"
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-500 mb-2"
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.25 22.5c0 4.886 3.961 8.85 8.848 8.85h1.25V27.999h-1.25c-3.035 0-5.5-2.466-5.5-5.5 0-3.033 2.465-5.5 5.5-5.5h1.25V17h-1.25c-4.888 0-8.848 3.962-8.848 8.85zm23.752-8.749l1.25-.001v3.25h-1.25c-3.035 0-5.5 2.465-5.5 5.5 0 3.036 2.465 5.5 5.5 5.5h1.25v-15zm-9.374-3.75v15h6.249c5.784 0 10.501-4.717 10.501-10.5S32.412 7 26.628 7H20.38v3.25h6.249c4.786 0 8.624 3.839 8.624 8.625 0 4.787-3.838 8.625-8.624 8.625h-6.249v3.25h6.249c5.785 0 10.501-4.717 10.501-10.5s-4.716-10.5-10.501-10.5H20.38v3.25h6.248c3.034 0 5.5 2.466 5.5 5.5 0 3.035-2.466 5.5-5.5 5.5H20.38v3.25h6.248c4.785 0 8.623-3.839 8.623-8.625 0-4.786-3.838-8.625-8.623-8.625H20.38v3.25z"
              ></path>
            </svg>
            <h2 className="font-helvetica-neue text-xl font-bold">
              Connects to QuickBooks Online
            </h2>
            <p className="font-helvetica text-sm mb-4">
              Save time and reduce errors by keeping Pulse and your accounting
              software in sync.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
