// import logo from './logo.svg';
// import './App.css';

function HomePage() {
    return (
        // <!-- This is a Semantic HTML Change -->
        // <!-- This is an A11y Change -->
        <main className="container center" role="main">

            <div className="page-area">

                {/* <!-- This is a Semantic HTML Change --> */}
                <article className="text-box">
                    {/* <!-- This is an A11y Change --> */}
                    <h2>Stay on track</h2>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </article>
        
                {/* <!-- This is a Semantic HTML Change --> */}
                <article className="text-box">
                    {/* <!-- This is an A11y Change --> */}
                    <h2>Alerts</h2>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </article>
        
                {/* <!-- This is a Semantic HTML Change --> */}
                <article className="text-box">
                    {/* <!-- This is an A11y Change --> */}
                    <h2>Results</h2>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </article>
        
                {/* <!-- This is a Semantic HTML Change --> */}
                <article className="text-box">
                    {/* <!-- This is an A11y Change --> */}
                    <h2>Free</h2>
                    <p>
                        This app is free!!! And you are the only one holding your data!
                    </p>
                </article>
        
                {/* <!-- This is a Semantic HTML Change --> */}
                <article className="text-box">
                    {/* <!-- This is an A11y Change --> */}
                    <h2>Stay on track</h2>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </article>
        
                {/* <!-- This is a Semantic HTML Change --> */}
                <article className="text-box">
                    {/* <!-- This is an A11y Change --> */}
                    <h2>Alerts</h2>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </article>
        
                {/* <!-- This is a Semantic HTML Change --> */}
                <article className="text-box">
                    {/* <!-- This is an A11y Change --> */}
                    <h2>Results</h2>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </article>
        
                {/* <!-- This is a Semantic HTML Change --> */}
                <article className="text-box">
                    {/* <!-- This is an A11y Change --> */}
                    <h2>Chart</h2>
                    <p>
                        <canvas id="myChart" width="400" height="400"></canvas>
                    </p>
                </article>

                <section className="text-box" id="d3jsSection">
                    <h2>D3.js Budget Chart</h2>
                    <div id="d3jsChart"></div>
                </section>

            </div>

        </main>
    );
}

export default HomePage;
