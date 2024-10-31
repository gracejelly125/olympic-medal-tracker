function MedalList( {countries, deleteCountryHandler} ) {
    const sumTotalMedals = (gold, silver, bronze) => {
        return gold + silver + bronze;
    }

    return (<div className='table-group'>
        {countries.length === 0 ? (
            <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
        ) : (
            <>
                <div className='medal-table header'>
                    <div>🏆순위</div>
                    <div>🌍국가명</div>
                    <div>🥇금메달</div>
                    <div>🥈은메달</div>
                    <div>🥉동메달</div>
                    <div>👏합계</div>
                    <div>✖</div>
                </div>
                {countries.map((c, index) => {
                    const totalMedals = sumTotalMedals(c.gold, c.silver, c.bronze);
                    return (
                    <div key={index} className={`medal-table ${index % 2 === 0 ? 'white' : 'gray'}`}>
                        <div>{index + 1}</div>
                        <div>{c.countryName}</div>
                        <div>{c.gold}</div>
                        <div>{c.silver}</div>
                        <div>{c.bronze}</div>
                        <div>{totalMedals}</div>
                        <div><button onClick={() => deleteCountryHandler(c.countryName)}>삭제</button></div>
                    </div>
                    );
                })}
            </>
        )}
    </div>
    );
}

export default MedalList;