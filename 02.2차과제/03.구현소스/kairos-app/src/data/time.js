// 시간표 데이터

export const timeData = {
  /* 
  
          "site":"학원구분" -  (혁신관/단계관)
          "season":"시간표 시즌" - 라디오 버튼 선택
          "grade":"학년" 
          "part":"반"
          "day":"시간",
          "time":"날짜"
        
 */

  //혁신관
  혁신관: {
    일반시간표: {
      초등부: [{ 반: " ", 요일: "월수금", 시간: "2:30~4:00" }],

      중등부: [
        { 반: "혁일 1반", 요일: "월수금", 시간: "4:00~5:30" },
        { 반: "혁일 2반", 요일: "월수금", 시간: "5:30~7:00" },
        { 반: "혁일 3반", 요일: ["화목", "월"], 시간: ["2:00~3:30", "4:00~5:30"] },
      ],

      고등부: [
        {
          반: "혁일 예비 고1",
          요일: ["화목", "토"],
          시간: ["4:00~6:00", "2:00~4:00"],
        },
        { 반: "혁일 예비 고2", 요일: ["월수금","월수금"], 시간: ["12:00~2:00","7:00~9:00"] },
        { 반: "혁일 기하", 요일: "토", 시간: "(am)10:30~1:30" },
      ],
    },

    여름방학: {
      초등부: [
        { 반: "혁여 오전반", 요일: "월수금", 시간: "2:30~4:00" },
        { 반: "혁여 오후반", 요일: "월수금", 시간: "2:30~4:00" },
      ],

      중등부: [
        { 반: "혁여 오전반", 요일: "월수금", 시간: "4:00~5:30" },
        { 반: "혁여 오후반", 요일: ["화목","토"], 시간: ["4:00~6:00","2:00~4:00"] },
      ],

      고등부: [
        { 반: "혁여 오전반", 요일: ["화목","토"], 시간: ["4:00~6:00","2:00~4:00"] },
        { 반: "혁여 오후반", 요일: "월수금", 시간: "12:00~2:00" },
        { 반: " 혁여 저녁반", 요일: "토", 시간: "(am)10:30~1:30" },
      ],
    },

    겨울방학: {
      초등부: [
        { 반: "혁겨 오전반", 요일: "월수금", 시간: "2:30~4:00" },
        { 반: "혁겨 오후반", 요일: "월수금", 시간: "2:30~4:00" },
      ],

      중등부: [
        { 반: "혁겨 아침반", 요일: "화목", 시간: "4:00~5:30" },
        { 반: "혁겨 오전반", 요일: "월수금", 시간: "4:00~5:30" },
        { 반: "혁겨 오후반", 요일: ["화목","토"], 시간: ["4:00~6:00","2:00~4:00"] },
      ],

      고등부: [
        { 반: "혁겨 오전반", 요일: ["화목","토"], 시간: ["4:00~6:00","2:00~4:00"] },
        { 반: "혁겨 오후반", 요일: "월수금", 시간: "12:00~2:00" },
        { 반: "혁겨 저녁반", 요일: "토", 시간: "(am)10:30~1:30" },
      ],
    },
  },

  //단계관
  단계관: {
    일반시간표: {
      초등부: [
        { 반: "단일 1반", 요일: "월금", 시간: "3:00~5:30" },
        { 반: "단일 2반", 요일: ["화목","월"], 시간: ["2:00~3:30","4:00~5:30"] },
      ],

      중등부: [
        { 반: "단일 1반", 요일: ["화목","월"], 시간: ["2:00~3:30","4:00~5:30"] },
        { 반: "단일 2반", 요일: "월수금", 시간: "5:30~7:00" },
      ],

      고등부: [
        { 반: "단일 예비 고1", 요일: "토", 시간: "(am)10:30~1:30" },
        { 반: "단일 예비 고2", 요일: ["월수금","월수금"], 시간: ["12:00~2:00","7:00~9:00"] },
        { 반: "단일 기하", 요일: ["화목","토"], 시간:[ "4:00~6:00","2:00~4:00"] },
      ],
    },

    여름방학: {
      초등부: [{ 반: "단여 오전반", 요일: ["화목","토"], 시간: ["1:00~2:00","3:00~3:30"] }],

      중등부: [
        { 반: "단여  오전반", 요일: "수금", 시간: "3:30~4:30" },
        ,
        { 반: "단여  오후반", 요일: ["월화","토"], 시간: ["4:00~5:30","3:00~5:00"] },
      ],
   
    고등부: [
      { 반: "단여  오전반", 요일: "금토", 시간: "(am)10:30~1:30" },
      { 반: "단여  오후반", 요일: "월수금", 시간: "12:00~2:00" },
      { 반: "단여  저녁반", 요일: ["화수","토"], 시간:[ "4:00~6:00","3:00~5:00"] },
    ],
  },

  겨울방학: {
    초등부: [
      { 반: "단겨 오전반", 요일: "화목", 시간: "3:30~5:00" },
      { 반: "단겨 오후반", 요일: "금토", 시간: "5:30~7:00" },
    ],

    중등부: [
      { 반: "단겨 오전반", 요일: "월수금", 시간: "2:00~4:00" },
      { 반: "단겨 오후반", 요일: ["화목","토"], 시간: ["4:00~6:00","2:00~4:00" ]},
    ],

    고등부: [
      { 반: "단겨 오전반", 요일:["화목","토"], 시간: ["4:00~6:00","2:00~4:00"] },
      { 반: "단겨 오후반", 요일:["월화","수목"], 시간: ["6:00~8:00","8:00~9:00"] },
    ],
  },
}

};
