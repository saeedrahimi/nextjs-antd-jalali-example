const GithubRibbon = () => {
    return (
      <>
        <style jsx>{`
          .github-ribbon {box-sizing: initial;position: fixed;padding: 5px 45px;width: 128px;top: 50px;right: -50px;-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);box-shadow: 0 0 0 3px #07b280, 0 0 20px -3px rgba(0, 0, 0, 0.5);text-shadow: 0 0 0 #ffffff, 0 0 5px rgba(0, 0, 0, 0.3);background-color: #07b280;color: #ffffff;font-size: 13px;font-family: sans-serif;text-decoration: none;font-weight: bold;border: 2px dotted #ffffff;-webkit-backface-visibility: hidden;          letter-spacing: 0.5px;}`}</style>
  
        <a href="https://github.com/saeedrahimi/nextjs-antd-jalali-example" className="github-ribbon">
          Fork me on GitHub
        </a>
      </>
    );
  };
  
  export default GithubRibbon;