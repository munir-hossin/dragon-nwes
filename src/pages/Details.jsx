import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div className="text-lg mx-auto space-y-4">
     <div className="h-screen overflow-y-scroll ">
     <h1 className="text-4xl text-green-700 font-bold text-center">
        Earning Potential of Web Developers Globally
      </h1>
      <p className="text-lg font-semibold text-center  ">
        Web developers’ earning potential varies widely depending on factors
        like location, experience, skill set, and the type of work (freelancing,
        remote work, or employment). Below is a breakdown by region and
        expertise level:{" "}
      </p>
      <h2 className="text-center text-3xl text-red-600">
        {" "}
        Global Average Salary
      </h2>
      <div className="flex text-2xl font-bold my-3 bg-lime-50 justify-center">
        Region Average Salary (USD/year)
        <br />
        United States $70,000 - $120,000
        <br />
        Canada $60,000 - $90,000
        <br />
        Western Europe $55,000 - $85,000
        <br />
        Eastern Europe $20,000 - $45,000
        <br />
        Australia $65,000 - $100,000
        <br />
        India $8,000 - $20,000
        <br />
        Southeast Asia $10,000 - $25,000
        <br />
        Middle East $25,000 - $50,000
        <br />
        Africa $10,000 - $25,000
      </div>

          <div>
            <p className="text-xl text-green-700 ">
                            2.2. Factors Influencing Developer Salaries
                2.2.1. Experience Level
                Entry-Level Developers: 0-2 years of experience typically earn $30,000 to $50,000 annually.
                Mid-Level Developers: 2-5 years of experience command salaries of $50,000 to $90,000.
                Senior Developers: 5+ years of experience earn $90,000 to $150,000, with some earning significantly more in top tech companies.
                2.2.2. Specialized Skills
                Web developers with in-demand skills often earn higher salaries. Examples include:

                Full-Stack Development: $70,000 - $110,000 (combination of front-end and back-end expertise).
                React.js or Vue.js Developers: $65,000 - $100,000.
                Node.js Developers: $75,000 - $120,000.
                Web3 and Blockchain Developers: $100,000 - $180,000.
                Cybersecurity Experts: $80,000 - $130,000.
                2.2.3. Location and Remote Work
                Developers in countries like the United States, Germany, Canada, and Australia tend to earn higher salaries.
                With the rise of remote work, developers from lower-income regions like India, Africa, and Eastern Europe can now work for global companies, bridging the income gap.
                2.2.4. Freelancing vs. Full-Time Employment
                Freelancers can earn significantly more depending on their clients and skills:

                Hourly rates for web developers on platforms like Upwork and Toptal range from $25 to $150/hour.
                Freelancers who specialize in eCommerce, PWAs, and Web3 can charge premium rates.
                Full-time employment provides stability but may limit earning potential compared to freelancing.

                2.2.5. Company Type
                Developers working at large tech companies like Google, Amazon, or Facebook earn higher salaries:

                Junior Developers: $80,000 - $120,000.
                Senior Developers: $130,000 - $200,000+.
                Startups may pay less initially but offer equity options, which can lead to significant earnings if the company succeeds.

                3. Future Outlook for Web Developers
                Web development remains a lucrative and in-demand career for the following reasons:

                Digital Transformation: Businesses worldwide are moving online, increasing demand for skilled developers.
                Emerging Technologies: AI, Web3, and cloud computing are creating new opportunities for web development.
                Remote Work: Web developers can work for international companies, providing access to better pay.
                Key Recommendations for Web Developers
                Learn In-Demand Skills: Focus on modern frameworks (React, Vue.js), cloud tools (AWS, Azure), and Web3 development.
                Build a Portfolio: Showcase projects on GitHub, LinkedIn, and portfolio websites.
                Network: Engage with online communities, participate in hackathons, and collaborate with other developers.
                Explore Freelancing: Platforms like Upwork, Toptal, and Fiverr offer high-paying opportunities.
                Continuous Learning: Stay updated with emerging trends and tools to remain competitive.
                Conclusion
                Web development is a dynamic field with endless opportunities for growth. Developers with specialized skills and global exposure can earn substantial incomes. The rise of AI, Web3, and cloud technologies ensures the demand for web developers will remain strong in the coming years.

                If you’re a web developer, focusing on improving your skill set, staying updated with trends, and exploring global opportunities can maximize your earning potential.

            </p>
          </div>
   
      <div className="mt-10 flex justify-center">
        <Link to={-1} className="btn mt-4">
          Go back
        </Link>
      </div>
     </div>
    </div>
  );
}
