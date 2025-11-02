export default function BlogViewAll() { 
  return (
          <a href="/allGallery" className="flex mr-5 border-2 rounded-3xl border-primary hover:bg-primary hover:text-white transition duration-1000 ease-in-out">
            <div className="text-white bg-primary px-3 py-1 rounded-3xl">View All</div>
            <div className="mr-2 mt-1.5">
              <svg className="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>    
  )
}