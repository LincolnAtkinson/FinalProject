$('#submit').on('click', function(){
    let Dname = $('#displayN').val();
    let Comm = $('#Com').val();
    $('#comments').prepend(`
    <div id="Commbox">
    <div id="userSettings">
        <div id="image"><img src="profileImage.jpg" id="Pimage"/><span id="username">`+Dname+`</span></div>
        <div id="changers"><span id="edit">Edit</span><span id="delete">Delete</span></div>
    </div>
    <div id="textChanger">
        <p id="userComm">`+Comm+`</p>
        <div class="flip">
            <input type="text" placeholder="Comment" id="commChanger"/>
            <span id="subChange">Submit</span>
        </div>
    </div>
</div>
    `);
    $('#displayN').val('');
    $('#Com').val('');
})
$('#comments').on('click', '#delete', function(){
    let parent = $(this).parents()[2];
    $(parent).remove();
});
$('#comments').on('click', '#edit', function(){
    let FC = $(this).parents()[2];
    $(FC).toggleClass('editing');
    let SC = $(FC).children()[1];
    let LC = $(SC).children()[1];
    $(LC).toggleClass('flip');
});
$('#comments').on('click', '#subChange', function(){
    let ist = $(this).parent()[0];
    let sib = $(ist).children()[0];
    let change = $(sib).val();
    let snd = $(ist).parent()[0];
    let trd = $(snd).children()[0];
    let nxt = $(ist).parent()[0];
    let lst = $(nxt).parent()[0]
    $(lst).toggleClass('editing');
    $(trd).text(change);
    $(ist).toggleClass('flip');
})