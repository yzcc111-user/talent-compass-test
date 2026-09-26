const TALENTS = [
  {key:'creative',name:'创意构想',short:'构',color:'#9b64c7',tagline:'把旧元素重新组合成新可能',summary:'你习惯先看见“还能怎样”，擅长从限制、矛盾和空白处生成新的做法。',scenes:['需要从零起步、寻找新方案或打破惯例的任务','允许快速试错、原型探索和跨领域联想的环境','团队卡住时，为问题提供不同入口的讨论'],actions:['每周挑一个熟悉流程，写下三种完全不同的替代做法。','先做小原型验证想法，避免把所有能量停留在构思阶段。','与擅长推进和拆解的人搭档，让新点子更快落地。']},
  {key:'express',name:'清晰表达',short:'言',color:'#4f7cd8',tagline:'把复杂想法变成别人听得懂的话',summary:'你会自然地整理重点、选择措辞并照顾理解顺序，让信息更容易被接住。',scenes:['需要说明观点、主持讨论或形成共同理解的场合','把专业内容转化为提案、教学或公众表达的任务','团队意见分散，需要提炼共识和下一步的时候'],actions:['用一句结论、三个依据练习表达同一件事。','重要沟通前先写下“对方听完要知道或做到什么”。','记录别人追问最多的地方，持续改进你的解释结构。']},
  {key:'logic',name:'逻辑拆解',short:'析',color:'#318d88',tagline:'把模糊问题拆成可验证的部分',summary:'你倾向于寻找因果、规则和结构，能够把复杂状况整理成更清楚的判断路径。',scenes:['信息混乱、需要定位原因或比较方案的任务','需要制定规则、流程、指标和验证方式的项目','面对争议时，把事实、假设与结论分开的讨论'],actions:['遇到难题时写出“已知、未知、假设、下一步验证”。','刻意寻找一个可能推翻当前判断的反例。','把分析结果转成一张别人可以执行的检查清单。']},
  {key:'aesthetic',name:'美感组织',short:'美',color:'#d06e78',tagline:'感知比例、节奏与整体气质',summary:'你对形式之间是否协调较敏感，常能察觉画面、文字或体验中的不一致。',scenes:['品牌、内容、空间或产品需要统一气质的任务','需要筛选、编排和提升完成度的创作过程','把零散材料整理成清晰且有吸引力的呈现'],actions:['建立自己的参考库，并写下每个案例真正有效的原因。','练习先删去一个多余元素，再决定是否需要增加内容。','邀请目标用户评价“是否清楚”，避免只用个人喜好判断。']},
  {key:'spatial',name:'空间建构',short:'域',color:'#d58e38',tagline:'在脑中安排位置、路径与关系',summary:'你容易把抽象关系转成布局和结构，关注人、物与信息应该放在哪里。',scenes:['规划空间、界面、流程或复杂信息架构的任务','需要预想移动路径、组合方式和整体结构的项目','把杂乱资源重新分区、归位并提高使用效率'],actions:['在动手前先画一张低成本布局草图。','用真实使用路径检查设计，而不是只看静态排列。','练习从俯视、正视和使用者视角观察同一问题。']},
  {key:'observe',name:'细节洞察',short:'察',color:'#2e9db1',tagline:'在微小变化中发现重要线索',summary:'你会留意别人容易忽略的差异、异常与信号，并从细节中形成更准确的判断。',scenes:['质检、研究、编辑或需要发现异常的工作','通过行为、数据或现场变化寻找线索的任务','成品发布前，需要耐心校对和查漏补缺的时候'],actions:['记录你观察到的事实，再单独写解释，避免两者混在一起。','为高频任务建立一份可复用的检查清单。','练习判断哪些细节真正影响结果，避免被无关信息拖慢。']},
  {key:'empathy',name:'情绪共鸣',short:'心',color:'#35a57b',tagline:'理解他人未说出口的感受与需要',summary:'你倾向于感知互动中的情绪温度，并调整方式让人更容易表达、合作或获得支持。',scenes:['沟通、服务、协作或需要建立信任的场合','团队紧张、意见冲突或有人难以表达的时候','需要理解用户、伙伴或受众真实体验的研究'],actions:['先复述对方的处境，再提供建议。','区分“我感受到的”与“对方明确说过的”。','为自己设置情绪边界，避免把理解变成过度承担。']},
  {key:'reflect',name:'自我校准',short:'省',color:'#d35f89',tagline:'觉察自己的状态并主动修正',summary:'你会观察自己的动机、能量和反应模式，并愿意根据反馈调整下一步。',scenes:['需要长期学习、复盘和持续改进的成长过程','面对复杂选择，需要辨认真实动机与代价的时候','工作节奏变化，需要重新分配注意力和能量的阶段'],actions:['每天用三句话记录：发生了什么、我怎样反应、下次怎样试。','为重大决定设置一个冷静期，再检查是否仍然一致。','向可信任的人索取具体行为反馈，而不是笼统评价。']},
  {key:'drive',name:'节奏推进',short:'进',color:'#536ed1',tagline:'把想法转成连续的下一步',summary:'你对进度和行动节点敏感，倾向于尽快启动、保持节奏并推动事情完成。',scenes:['目标明确、需要协调资源并持续交付的项目','团队犹豫不前，需要有人确定下一步的时候','多任务并行，需要排序、跟进和及时收尾的阶段'],actions:['每天只锁定一个必须完成的关键动作。','在启动前定义“完成长什么样”，减少无效忙碌。','给探索和复盘留出固定空间，避免速度替代方向。']},
  {key:'body',name:'身体协调',short:'动',color:'#6f63bd',tagline:'通过动作、触感和节奏快速学习',summary:'你容易在实际操作中形成理解，对动作反馈、手感、节奏和身体状态较为敏感。',scenes:['需要示范、制作、表演、运动或现场操作的任务','通过练习和即时反馈掌握技能的学习环境','对空间、工具和身体配合要求较高的工作'],actions:['学习新技能时尽早进入实际操作，不只停留在阅读。','把复杂动作拆成短序列，逐段练习再连接。','记录睡眠、疲劳与表现的关系，保护稳定输出。']}
];

const Q = (prompt, choices) => ({prompt, choices:choices.map(([text,talent])=>({text,talent}))});
const QUESTIONS = [
Q('团队为一个活动方案卡住时，你通常先做什么？',[['抛出一个完全不同的玩法','creative'],['重新统一画面与整体气质','aesthetic'],['问问大家真正担心的是什么','empathy'],['定一个最小方案马上试起来','drive']]),
Q('第一次打开功能很多的新软件，你更可能怎么熟悉它？',[['找一段说明并讲成自己的话','express'],['先看菜单和页面之间怎样连接','spatial'],['留意自己具体卡在哪一步','reflect'],['直接点击、拖动，在操作中摸索','body']]),
Q('出行路线临时中断，你的第一反应更接近哪项？',[['重新计算时间和可行路线','logic'],['核对站点、时刻和现场提示','observe'],['迅速选一条备用路线继续走','drive'],['找一个意料之外但有趣的替代去处','creative']]),
Q('排练中的一段展示显得不够顺，你更想先调整什么？',[['整体节奏、构图和观感','aesthetic'],['参与者是不是紧张或没被理解','empathy'],['动作衔接和身体发力方式','body'],['把关键提示说得更明确','express']]),
Q('要把一间小房间变得更好用，你会从哪里开始？',[['先划分使用区域与移动路线','spatial'],['先弄清自己真正的生活习惯','reflect'],['设计一物多用的新办法','creative'],['按频率和必要性给物品分类','logic']]),
Q('读完一篇信息很多的文章，你最自然的处理方式是？',[['标出容易被忽略的例子和差异','observe'],['提炼一件马上能做的事','drive'],['用更简洁的话复述重点','express'],['重新排版成更舒服的阅读结构','aesthetic']]),
Q('两位伙伴争论越来越激烈，你更可能先做什么？',[['指出双方各自在意的感受','empathy'],['请大家暂停一下，走动或换个状态','body'],['把事实、判断和诉求分开','logic'],['画出问题之间的关系和分歧位置','spatial']]),
Q('一个新想法刚冒出来时，你通常会怎样继续？',[['先问自己为什么会被它吸引','reflect'],['沿着联想再扩展几个版本','creative'],['寻找最匹配它的风格和语气','aesthetic'],['收集生活里支持它的具体细节','observe']]),
Q('同一天出现好几项紧急任务，你会优先怎么处理？',[['迅速排顺序并启动第一项','drive'],['和相关的人确认优先级与交付','express'],['重新安排工具、文件和工作区域','spatial'],['先判断谁最需要及时回应','empathy']]),
Q('学习一项新的运动或手艺时，什么最能帮助你？',[['亲手反复做，靠手感修正','body'],['先理解规则与动作原理','logic'],['仔细看熟练者的细小差别','observe'],['记录每次练习时自己的状态','reflect']]),
Q('朋友请你一起策划一场聚会，你更想负责什么？',[['设计一个让人意外的主题环节','creative'],['统一场地、物料和视觉氛围','aesthetic'],['照顾不同人的舒适度和参与感','empathy'],['列出时间表并推动各项准备','drive']]),
Q('要向完全不了解的人介绍你的工作，你会怎么准备？',[['先找一个对方熟悉的比喻','express'],['画出工作步骤和关系结构','spatial'],['检查自己最容易讲得含糊的部分','reflect'],['带一个可以现场演示的实例','body']]),
Q('看到一组看起来矛盾的数据，你通常会先做什么？',[['检查口径、样本和因果关系','logic'],['寻找其中反常的小变化','observe'],['决定下一步最值得验证什么','drive'],['提出一个原来没人考虑的解释','creative']]),
Q('一起布置展示空间时，你最容易注意到什么？',[['颜色、材质和留白是否协调','aesthetic'],['参观者会不会感到局促或困惑','empathy'],['安装、搬运和操作是否顺手','body'],['说明文字是否准确好懂','express']]),
Q('行李有限却要应对多种场合，你会怎样选择？',[['按场景规划组合与收纳位置','spatial'],['先辨认自己真正重视的体验','reflect'],['找能转换用途的巧妙搭配','creative'],['按必要程度和使用概率排序','logic']]),
Q('接手别人留下的半成品，你通常先做什么？',[['查看遗漏、错误和不一致的地方','observe'],['确定交付节点并补上关键缺口','drive'],['整理成一份清晰的现状说明','express'],['统一细节，让成品看起来完整','aesthetic']]),
Q('第一次参加陌生人的讨论，你更容易先捕捉到什么？',[['谁在犹豫、谁没有被听见','empathy'],['现场的节奏和身体语言','body'],['论点之间有没有逻辑跳跃','logic'],['座位、视线和发言关系','spatial']]),
Q('遇到一项自己不太想做但很重要的任务，你会怎么启动？',[['找出抗拒背后的真实原因','reflect'],['把它改造成更有趣的挑战','creative'],['营造一个让自己愿意投入的环境','aesthetic'],['观察最容易分心的具体时刻','observe']]),
Q('团队需要在今天之内做出决定，你更倾向于？',[['列出可逆决定，先推动一步','drive'],['把分歧压缩成几个清楚问题','express'],['把选项放进同一张结构图比较','spatial'],['确认决定对不同成员的影响','empathy']]),
Q('照着教程做东西时，你发现成品总差一点，你会？',[['调整手势、力度和操作顺序','body'],['回到原理检查哪个环节不成立','logic'],['逐帧比较教程与自己的差异','observe'],['复盘自己是不是急于求成','reflect']]),
Q('要为一个老问题寻找新解法，你会先尝试什么？',[['把两个不相关领域的方法拼在一起','creative'],['改变信息呈现的顺序与形式','aesthetic'],['访谈真正受这个问题影响的人','empathy'],['设定一天内可完成的小实验','drive']]),
Q('主持一场线上会议时，你最在意什么？',[['让每个人都知道结论和下一步','express'],['屏幕、资料和发言顺序是否清楚','spatial'],['自己什么时候开始失去专注','reflect'],['用语气和停顿维持交流节奏','body']]),
Q('评估一个看起来很好的新机会，你会先做什么？',[['拆开收益、成本和关键假设','logic'],['检查容易被包装掩盖的小信息','observe'],['确定最小验证动作和截止时间','drive'],['想象它还能发展成哪些新方向','creative']]),
Q('别人请你帮忙修改一份作品，你更自然的切入点是？',[['整体风格是否统一、重点是否突出','aesthetic'],['先理解作者真正想表达的感受','empathy'],['通过朗读或演示感受哪里不顺','body'],['把反馈组织成清楚、可执行的话','express']]),
Q('搬到新的工作位置，你会优先处理什么？',[['安排物品与动线，让使用更顺手','spatial'],['观察这个环境如何影响自己的状态','reflect'],['尝试一种以前没用过的工作布置','creative'],['按任务流程配置工具和文件','logic']]),
Q('查看用户对产品的反馈时，你更容易被什么吸引？',[['反复出现却没被重视的小抱怨','observe'],['能马上转成改进任务的反馈','drive'],['用户用来描述问题的原话','express'],['反馈背后的体验是否连贯舒服','aesthetic']]),
Q('朋友向你讲述一件难受的事，你通常更可能？',[['先确认他此刻最需要什么','empathy'],['陪他散步或做点能缓和状态的事','body'],['帮他分清事实、推测和选择','logic'],['把人物和事件关系梳理出来','spatial']]),
Q('完成一个长期项目后，你最想先做什么？',[['回看自己的变化和消耗','reflect'],['把成果改造成新的用途','creative'],['整理成更有完成感的最终呈现','aesthetic'],['记录过程中最关键的转折细节','observe']]),
Q('一个计划执行到一半明显偏离目标，你会？',[['马上重排里程碑和责任人','drive'],['重新说明目标，确认大家理解一致','express'],['调整流程结构与资源位置','spatial'],['听听参与者实际遇到的困难','empathy']]),
Q('面对需要精细操作的任务，你更相信什么？',[['肌肉记忆和实时手感','body'],['对步骤与机制的理解','logic'],['对微小偏差的持续观察','observe'],['对自己紧张程度的觉察','reflect']]),
Q('当资源很少但目标很高时，你最可能贡献什么？',[['找到绕开限制的新路径','creative'],['用有限元素做出统一质感','aesthetic'],['让每个人的优势都被看见和使用','empathy'],['把大目标拆成连续交付','drive']]),
Q('需要写一段重要说明时，你会先考虑？',[['读者最容易在哪里误解','express'],['信息应该怎样分层和排列','spatial'],['自己是否在回避某个关键事实','reflect'],['这段话读出来的节奏是否自然','body']]),
Q('你发现团队一直在重复同一个错误，会先怎样处理？',[['分析错误发生的共同条件','logic'],['找出每次出错前的微小信号','observe'],['建立一个立即可执行的防错步骤','drive'],['重新定义问题，寻找不同解法','creative']]),
Q('挑选一件长期使用的物品时，你更看重？',[['比例、材质与长期耐看的感觉','aesthetic'],['它是否照顾真实使用者的感受','empathy'],['上手是否自然、触感是否舒服','body'],['功能说明和使用边界是否清楚','express']]),
Q('面对一堆没有分类的资料，你更愿意怎么整理？',[['先搭建层级和查找路径','spatial'],['先判断哪些资料对自己真正重要','reflect'],['创造一套更有启发性的关联方式','creative'],['定义分类规则并处理例外','logic']]),
Q('在一次现场活动中，你更可能主动发现什么？',[['流程表没有写出的异常细节','observe'],['哪个环节需要立刻有人补位','drive'],['参与者是否听懂了关键说明','express'],['整体体验的节奏是否协调','aesthetic']]),
Q('新成员进入团队时，你最愿意做什么？',[['帮助他读懂团队里的情绪和习惯','empathy'],['带他实际走一遍工具和流程','body'],['解释为什么规则这样设计','logic'],['画出角色和协作关系图','spatial']]),
Q('收到一条让你不舒服的评价，你更可能先？',[['观察自己为什么会被触动','reflect'],['把批评转成一个新的尝试方向','creative'],['分辨表达方式和内容是否匹配','aesthetic'],['找出评价中具体可验证的部分','observe']]),
Q('距离交付只剩很短时间，你会把注意力放在哪里？',[['锁定最关键成果并保持推进','drive'],['让所有人清楚当前取舍','express'],['重新安排页面、文件或工作位','spatial'],['确认高压下成员的承受情况','empathy']]),
Q('挑选衣服或装备时，你最先排除什么？',[['动作受限、使用起来不顺手的','body'],['与实际用途和条件不匹配的','logic'],['做工细节或状态有异常的','observe'],['让自己感觉不像真实状态的','reflect']])
];

['#7b3fa4','#315fb7','#17756f','#a64a55','#9a5a12','#176f81','#177053','#a43c62','#4056b4','#55459c'].forEach((color,i)=>TALENTS[i].color=color);
function scoreAnswers(answers){const raw=Object.fromEntries(TALENTS.map(t=>[t.key,0]));answers.forEach((answer,i)=>{const choice=QUESTIONS[i]?.choices[answer];if(choice)raw[choice.talent]+=1});const vals=Object.values(raw),min=Math.min(...vals),max=Math.max(...vals);const scores=Object.fromEntries(TALENTS.map(t=>[t.key,max===min?70:Math.round(44+(raw[t.key]-min)*56/(max-min))]));return {raw,scores}}

const STORAGE_KEY='talent-compass-progress-v1';
const screens=['start-screen','test-screen','loading-screen','result-screen'];
const state={index:0,answers:[]};
const $=id=>document.getElementById(id);

function showScreen(id){screens.forEach(name=>$(name).classList.toggle('is-active',name===id));window.scrollTo(0,0);}
function saveProgress(){localStorage.setItem(STORAGE_KEY,JSON.stringify({index:state.index,answers:state.answers}));updateResume();}
function loadProgress(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));if(saved&&Array.isArray(saved.answers)&&saved.answers.length<QUESTIONS.length){state.answers=saved.answers;state.index=Math.min(saved.index??saved.answers.length,QUESTIONS.length-1);return true}}catch{}return false}
function clearProgress(){localStorage.removeItem(STORAGE_KEY);state.index=0;state.answers=[];updateResume();}
function updateResume(){const saved=localStorage.getItem(STORAGE_KEY);if(!saved){$('resume-strip').classList.add('is-hidden');return}try{const data=JSON.parse(saved);if(data.answers?.length&&data.answers.length<QUESTIONS.length){$('resume-copy').textContent=`已完成 ${data.answers.length} / ${QUESTIONS.length}`;$('resume-strip').classList.remove('is-hidden');return}}catch{}$('resume-strip').classList.add('is-hidden')}
function begin(reset=true){if(reset)clearProgress();showScreen('test-screen');renderQuestion();}
function renderQuestion(){const item=QUESTIONS[state.index];$('question-text').textContent=item.prompt;$('progress-copy').textContent=`${state.index+1} / ${QUESTIONS.length}`;$('progress-bar').style.setProperty('--progress',String(state.index/QUESTIONS.length));$('progress-bar').parentElement.setAttribute('aria-valuenow',String(state.index));$('previous-question').disabled=state.index===0;
  $('answer-list').replaceChildren(...item.choices.map((choice,i)=>{const button=document.createElement('button');button.type='button';button.className='answer-button';button.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span><span class="answer-copy"></span>`;button.querySelector('.answer-copy').textContent=choice.text;button.addEventListener('click',()=>chooseAnswer(i,button));return button}));$('question-text').focus?.();}
function chooseAnswer(choiceIndex,button){document.querySelectorAll('.answer-button').forEach(b=>b.disabled=true);button.classList.add('is-selected');state.answers[state.index]=choiceIndex;saveProgress();setTimeout(()=>{if(state.index===QUESTIONS.length-1){finishTest()}else{state.index+=1;saveProgress();renderQuestion()}},180)}
function previousQuestion(){if(state.index===0)return;state.index-=1;state.answers=state.answers.slice(0,state.index);saveProgress();renderQuestion()}
function finishTest(){const result=scoreAnswers(state.answers);localStorage.removeItem(STORAGE_KEY);updateResume();showScreen('loading-screen');setTimeout(()=>{$('.loading-steps span:nth-child(2)').classList.remove('is-active');$('.loading-steps span:nth-child(2)').classList.add('is-done');$('.loading-steps span:nth-child(2) b').textContent='完成';$('.loading-steps span:nth-child(3)').classList.add('is-active');$('.loading-steps span:nth-child(3) b').textContent='进行中'},500);setTimeout(()=>renderResult(result),1050)}
function sortedTalents(scores){return [...TALENTS].sort((a,b)=>scores[b.key]-scores[a.key]||TALENTS.indexOf(a)-TALENTS.indexOf(b))}
function renderResult(result,shared=false){const ordered=sortedTalents(result.scores),top=ordered[0];showScreen('result-screen');$('result-mark').textContent=top.short;$('result-mark').style.background=top.color;$('result-title').textContent=top.name;$('result-summary').textContent=top.summary;
  $('top-three').replaceChildren(...ordered.slice(0,3).map((t,i)=>{const el=document.createElement('div');el.className='top-item';el.innerHTML=`<span class="rank">${i+1}</span><div><strong></strong><p></p></div><em>${result.scores[t.key]}</em>`;el.querySelector('strong').textContent=t.name;el.querySelector('p').textContent=t.tagline;return el}));
  $('distribution-list').replaceChildren(...ordered.map(t=>{const row=document.createElement('div');row.className='distribution-row';row.style.setProperty('--color',t.color);row.style.setProperty('--score',`${result.scores[t.key]}%`);row.innerHTML='<strong></strong><div class="bar-track"><i></i></div><span></span>';row.querySelector('strong').textContent=t.name;row.querySelector('span').textContent=result.scores[t.key];return row}));
  $('scene-list').replaceChildren(...top.scenes.map(text=>Object.assign(document.createElement('li'),{textContent:text})));
  $('action-list').replaceChildren(...top.actions.map(text=>Object.assign(document.createElement('li'),{textContent:text})));
  drawRadar(result.scores);state.lastResult=result;if(!shared)history.replaceState(null,'',location.pathname);}
function drawRadar(scores){const canvas=$('talent-radar'),ctx=canvas.getContext('2d'),dpr=Math.min(devicePixelRatio||1,2),cssW=canvas.clientWidth||480,cssH=cssW*.78;canvas.width=cssW*dpr;canvas.height=cssH*dpr;ctx.scale(dpr,dpr);const cx=cssW/2,cy=cssH/2+4,r=Math.min(cssW,cssH)*.34,n=TALENTS.length;ctx.clearRect(0,0,cssW,cssH);
  for(let ring=1;ring<=4;ring++){ctx.beginPath();for(let i=0;i<n;i++){const a=-Math.PI/2+i*2*Math.PI/n,x=cx+Math.cos(a)*r*ring/4,y=cy+Math.sin(a)*r*ring/4;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.closePath();ctx.strokeStyle='rgba(91,112,158,.18)';ctx.lineWidth=1;ctx.stroke()}
  ctx.beginPath();TALENTS.forEach((t,i)=>{const a=-Math.PI/2+i*2*Math.PI/n,val=scores[t.key]/100,x=cx+Math.cos(a)*r*val,y=cy+Math.sin(a)*r*val;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();ctx.fillStyle='rgba(53,91,201,.16)';ctx.fill();ctx.strokeStyle='#355bc9';ctx.lineWidth=2;ctx.stroke();
  TALENTS.forEach((t,i)=>{const a=-Math.PI/2+i*2*Math.PI/n,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r,lx=cx+Math.cos(a)*(r+24),ly=cy+Math.sin(a)*(r+24);ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(x,y);ctx.strokeStyle='rgba(91,112,158,.13)';ctx.stroke();ctx.fillStyle=t.color;ctx.beginPath();ctx.arc(cx+Math.cos(a)*r*scores[t.key]/100,cy+Math.sin(a)*r*scores[t.key]/100,3.5,0,Math.PI*2);ctx.fill();ctx.fillStyle='#56617a';ctx.font='600 12px PingFang SC, sans-serif';ctx.textAlign=lx<cx-5?'right':lx>cx+5?'left':'center';ctx.textBaseline=ly<cy?'bottom':'top';ctx.fillText(t.name.slice(0,2),lx,ly)})}
function encodeResult(result){return btoa(JSON.stringify(result.scores))}
function decodeResult(value){try{const scores=JSON.parse(atob(value));if(TALENTS.every(t=>Number.isFinite(scores[t.key])))return {scores,raw:{}}}catch{}return null}
async function share(resultOnly=false){let url=new URL(location.href);if(resultOnly&&state.lastResult)url.searchParams.set('r',encodeResult(state.lastResult));else url.search='';const data={title:resultOnly?'我的天赋罗盘结果':'天赋罗盘｜十维优势倾向测试',text:resultOnly?`我的主天赋倾向是${sortedTalents(state.lastResult.scores)[0].name}。来看看你的自然优势方向。`:'用40道日常情境题，看见你更自然的优势方向。',url:url.toString()};try{if(navigator.share){await navigator.share(data)}else{await navigator.clipboard.writeText(`${data.text}\n${data.url}`);toast('分享链接已复制')}}catch(error){if(error?.name!=='AbortError'){try{await navigator.clipboard.writeText(data.url);toast('链接已复制')}catch{toast('请复制浏览器地址分享')}}}}
let toastTimer;function toast(message){$('toast').textContent=message;$('toast').classList.add('is-visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('is-visible'),1800)}

$('start-button').addEventListener('click',()=>begin(true));$('resume-button').addEventListener('click',()=>{loadProgress();begin(false)});$('previous-question').addEventListener('click',previousQuestion);$('leave-test').addEventListener('click',()=>{saveProgress();showScreen('start-screen')});$('home-button').addEventListener('click',()=>{showScreen('start-screen');updateResume()});$('restart-button').addEventListener('click',()=>begin(true));$('top-share').addEventListener('click',()=>share(false));$('start-share').addEventListener('click',()=>share(false));$('share-result').addEventListener('click',()=>share(true));addEventListener('resize',()=>{if($('result-screen').classList.contains('is-active')&&state.lastResult)drawRadar(state.lastResult.scores)});

const shared=new URLSearchParams(location.search).get('r');const sharedResult=shared&&decodeResult(shared);if(sharedResult){state.lastResult=sharedResult;renderResult(sharedResult,true)}else{updateResume()}
