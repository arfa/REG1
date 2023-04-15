import { useState, useEffect } from 'react';
import JobFilters from './JobFilters.js';
import JobListing from './JobListing.js';
import Header from './Header';
import Footer from './Footer';
import data from '../assets/data.json';

export default function Opportunity() {
	const [jobs, setJobs] = useState([]);
	const [filters, setFilters] = useState([]);

	useEffect(() => {
		setJobs(data);
	}, []);

	const filterTags = ({ role, level, languages, tools }) => {
		if (filters.length === 0) {
			return true;
		}
		const tags = [role, level, ...languages, ...tools];

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

	const filteredJob = jobs.filter((job) => filterTags(job));

	return (
		<>
			<Header />
			<main className="my-16 max-w-screen-lg mx-auto">
				
					<JobFilters
						filters={filters}
						handleFilter={handleFilter}
						handleClearFilters={handleClearFilters}
					/>
				
				{filteredJob.map((job) => (
					<JobListing
						job={job}
						key={job.id}
						handleTagSearch={handleTagSearch}
					/>
				))}
			</main>
      <Footer/>
		</>
	);
}