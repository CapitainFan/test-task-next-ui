const DollarSvg = () => {
    return(
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="w-5 h-5" d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0
                15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z" fill="#1273EB"/>
            <path className="w-5 h-5" d="M9.63398 15.8594V14.6215C9.09609 14.568 8.61562 14.4266 8.19296 14.1965C7.76991
                13.9668 7.43866 13.6414 7.19843 13.2203C6.95819 12.7996 6.84218 12.277 6.85038 11.6531L6.86288
                11.6223H8.97499C8.97499 11.9547 9.02421 12.225 9.12265 12.432C9.22109 12.6395 9.35663 12.7914 9.5289 
                12.8879C9.70116 12.9844 9.90038 13.0324 10.1262 13.0324C10.3109 13.0324 10.4648 12.9945 10.5879 12.9184C10.7109
                12.8426 10.8035 12.7367 10.8648 12.6012C10.9262 12.4656 10.957 12.3098 10.957 12.1332C10.957 11.9238
                10.925 11.7473 10.8617 11.6035C10.798 11.4598 10.6934 11.3316 10.5476 11.2188C10.4019 11.1059 10.2016
                10.9941 9.94726 10.8832C9.30663 10.6289 8.78046 10.3742 8.36757 10.1195C7.95507 9.86523 7.64999 9.56758 
                7.45312 9.22656C7.25624 8.88594 7.15741 8.45898 7.15741 7.9457C7.15741 7.24766 7.39335 6.67422 7.86562 
                6.22461C8.33749 5.775 8.96796 5.51328 9.75624 5.43945V4.14023H10.7414V5.47031C11.4805 5.58125 12.0664 5.88516 
                12.4996 6.38164C12.9328 6.87852 13.143 7.51289 13.1309 8.28437L13.1492 8.33359H11.0125C11.0125 7.89453 10.9293 
                7.56914 10.7633 7.35742C10.5969 7.14609 10.3805 7.04023 10.1137 7.04023C9.84687 7.04023 9.63554 7.12656 9.5039 
                7.29883C9.37265 7.47109 9.30702 7.69492 9.30702 7.96992C9.30702 8.15078 9.33671 8.30781 9.39648 8.44102C9.45585 
                8.57461 9.55976 8.69648 9.70741 8.80742C9.85507 8.91836 10.0586 9.03125 10.3172 9.14609C10.9492 9.42109 11.4726 
                9.69023 11.8875 9.95273C12.3019 10.2156 12.6109 10.5164 12.8144 10.8551C13.018 11.1938 13.1191 11.6156 13.1191
                12.1207C13.1191 12.8309 12.8934 13.4035 12.4418 13.8387C11.9902 14.2738 11.3848 14.5305 10.625 
                14.6086V15.8586H9.63358L9.63398 15.8594Z"
                fill="white"/>
        </svg>
    )
}

const CurrencyComponent = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center bg-transparent gap-1">
    <DollarSvg/>
    <span className="text-sm">{text}</span>
  </div>
);



const UaLanguageComponent = () => (
  <div className="flex items-center justify-center bg-transparent gap-1">
    <div className="
      w-5 h-5 
      rounded-full 
      bg-[linear-gradient(180deg,rgb(51,138,243)_50%,rgb(255,218,68)_50%)]
    "/>
    <h3 className="text-[13px] leading-none align-middle">UA</h3>
  </div>
);


const EnglishLanguageComponent = () => (
  <div className="flex items-center justify-center bg-transparent gap-1">
      <div className="w-5 h-5 rounded-full overflow-hidden 
          bg-[url('../static/images/britainflag.png')] bg-center bg-cover"
      />
      <h3 className="text-[13px] leading-none align-middle">EN</h3>
  </div>
);


export {DollarSvg, CurrencyComponent, UaLanguageComponent, EnglishLanguageComponent}