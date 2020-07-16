
$(document).ready(function(){
  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]の入力値を取得して合計点と平均点を出すロジックを作ります。
  let sumvec=0;
  function score_indicate(){
    // 変数「subject_points」に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]の配列を代入します。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // 変数「sum」に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]をそれぞれ足します。
    // ヒント! 配列を一つづつ取り出して足していきます。
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // 「合計点：」(class="sum_indicate")に変数「sum」(合計点)を出力させます。
    $("#sum_indicate").text(sum);
    sumvec=sum;
    // 変数「average」に
    // 平均値を出して代入します。(平均をとりたい数の合計点数(sum) / 全体の個数)
    // ヒント! 全体の個数はlengthメソッドを使って求めます。(lengthメソッド: 文字列の長さや配列の要素数などを取得するメソッド)
  };
  // 平均点数を取得し、取得した平均点数からランク分け("A", "B", "C", "D")をするロジックを作ります。
  function get_achievement(){
    // 変数「averageIndicate」に
    // 平均点数をHTML上のclass="average_indicate"から取得して代入します。
    let averageIndicate = $("#average_indicate").text(sumvec/5);
    average=sumvec/5;
    console.log(average);
    // もし「averageIndicate」が80以上なら"A"を返します。
    if ( average >= 80){
      return "A";
      // もし「averageIndicate」が60以上なら"B"を返します。
    } else if ( average >= 60) {
      return "B";
      // もし「averageIndicate」が40以上なら"C"を返します。
      // もし「averageIndicate」がそれ以外の点数なら"D"を返します。
    } else {
      return "D";
    }
  };
  // 平均値を取得し、取得した平均点からランク分け("A", "B", "C", "D")をするロジックを作ります。
  function get_pass_or_failure()
  {
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let number = subject_points.length;
    let judge = "Passed";
    for (var i = 0; i < number; i++)
    {
      if (subject_points[i]<=60)
      {
        judge ="Failed";
        break;
      }
    };
    return judge;
  };



  function judgement()
  {
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    // 「最終ジャッジ」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}で${pass_or_failure}です」が出力される処理です。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info"> Your Final Grade is ${achievement}, you ${pass_or_failure} .</label>`);
  };


  $('#national_language, #english, #mathematics, #science, #society').change(function()
  {
    score_indicate();
  });


  $('#btn-evaluation').click
(
    function()
  {
    $("#evaluation").text(get_achievement());
  }
);


    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });

  $('#btn-declaration').click
(
    function()
    {
      $("#declaration").text(judgement());
  }
);

});
