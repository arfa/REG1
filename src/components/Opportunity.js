import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import JobFilters from './JobFilters.js';
import JobListing from './JobListing.js';
import Header from './Header';
import Footer from './Footer';
import sanityClient from "../client.js";

export default function Opportunity() {
	const [jobs, setJobs] = useState([]);
	const [filters, setFilters] = useState([]);

	

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "offre"]{
        role,
        level,
        body,
        publishedAt,
        mainImage{
          asset->{
          _id,
          url
        },
		"name": author->name,
        "authorImage": author->image
      }
    }`
      )
      .then((data) => setJobs(data))
      .catch(console.error);
  }, []);


	const filterTags = ({ publishedAt, level }) => {
		if (filters.length === 0) {
			return true;
		}
		const tags = [publishedAt, level];

		return filters.every((filter) => tags.includes(filter));
	};

	const handleTagSearch = (tag) => {
		if (filters.includes(tag)) return;
		setFilters((prevState) => [...prevState, tag]);
	};

	const handleFilter = (tag) => {
		setFilters(filters.filter((item) => item !== tag));
	};

	const handleClearFilters = () => {
		setFilters([]);
	};
	const jobss =[...jobs].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
	const filteredJob = jobss.filter((job) => filterTags(job));

	return (
		<> 
		<Helmet>
		<title>Opportunités de recyclage des déchets de bâtiment en Tunisie</title>
    <meta name='description' content='Explorez les opportunités de recyclage des déchets de bâtiment en Tunisie avec Respect Environment Group. Ensemble, pour une construction durable.' />
		</Helmet>
		<div className='sticky -top-28  z-10'>
		<Header text={'Rejoignez nous'} />
			<div className='my-16 max-w-screen-lg mx-auto'>
			<JobFilters
						filters={filters}
						handleFilter={handleFilter}
						handleClearFilters={handleClearFilters}
					/>
			</div>
		</div>
			
			
			<main className="my-16 max-w-screen-lg mx-auto">
				
					
				
				{filteredJob.map((job,index) => (
					<JobListing
						job={job}
						key={index}
						handleTagSearch={handleTagSearch}
					/>
				))}
			</main>
      <Footer/>
		</>
	);
}