import{Q as ot,a as u,D as $}from"./vue-7UHhFxUK.js";import{Z as P,G as _,u as rt,a as it,c as lt,D as ke,ab as X}from"./index-SV44U77X.js";import{w as Se}from"./workspace-manager-access-Tqup0gXl.js";const ue=`
  id
  title
  description
  type
  audienceTargetType
  ownerWorkspaceId
  settings
  postsCount
  permissionIds
  targetWorkspaceClients { id permissionIds }
  targetClientGroups { id permissionIds }
  createdAt
  updatedAt
`,de=`
  id
  boardId
  name
  subtitle
  type
  likeCount
  commentsCount
  audienceTargetType
  ownerWorkspaceId
  metadata
  likedByMe
  isPinned
  pinnedAt
  tags { id workspaceId name slug }
  targetWorkspaceClientIds
  targetClientGroupIds
  poll {
    expiresAt
    isExpired
    votedOptionId
    options { id label sortOrder voteCount }
  }
  event {
    startsAt
    endsAt
    expiresAt
    isExpired
    goingCount
    maybeCount
    notGoingCount
    myRsvpStatus
  }
  createdAt
  updatedAt
`,ut=`
  query Boards($workspaceId: UUID!) {
    boards(workspaceId: $workspaceId) {
      success
      errorMessages
      payload {
        ${ue}
      }
    }
  }
`,dt=`
  query Board($id: UUID!) {
    board(id: $id) {
      success
      errorMessages
      payload {
        ${ue}
      }
    }
  }
`,ct=`
  query BoardPermissions($workspaceId: UUID!) {
    boardPermissions(workspaceId: $workspaceId) {
      success
      errorMessages
      payload { id name }
    }
  }
`,pt=`
  query Posts($input: GetPostsInput!) {
    posts(input: $input) {
      success
      errorMessages
      payload {
        hasNextPage
        nextCursor
        items {
          ${de}
        }
      }
    }
  }
`,ft=`
  query PostsByWorkspace($input: GetPostsByWorkspaceInput!) {
    postsByWorkspace(input: $input) {
      success
      errorMessages
      payload {
        hasNextPage
        nextCursor
        items {
          id
          boardId
          name
          subtitle
          type
          metadata
          likeCount
          commentsCount
          likedByMe
          isPinned
          pinnedAt
          tags { id name slug }
          poll {
            expiresAt
            isExpired
            votedOptionId
            options { id label sortOrder voteCount }
          }
          event {
            startsAt
            endsAt
            expiresAt
            isExpired
            goingCount
            maybeCount
            notGoingCount
            myRsvpStatus
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`,vt=`
  query Post($id: UUID!) {
    post(id: $id) {
      success
      errorMessages
      payload {
        ${de}
      }
    }
  }
`,mt=`
  query PostComments($postId: UUID!) {
    postComments(postId: $postId) {
      success
      errorMessages
      payload {
        id
        postId
        workspaceClientId
        content
        createdAt
        updatedAt
        workspaceClient { id firstName lastName email }
      }
    }
  }
`,gt=`
  query PostTags($workspaceId: UUID!) {
    postTags(workspaceId: $workspaceId) {
      success
      errorMessages
      payload { id workspaceId name slug }
    }
  }
`,yt=`
  mutation SetBoard($input: SetBoardInput!) {
    setBoard(input: $input) {
      success
      errorMessages
      payload {
        ${ue}
      }
    }
  }
`,Pt=`
  mutation DeleteBoard($id: UUID!) {
    deleteBoard(id: $id) {
      success
      errorMessages
      payload { id }
    }
  }
`,It=`
  mutation SetPost($input: SetPostInput!) {
    setPost(input: $input) {
      success
      errorMessages
      payload {
        ${de}
      }
    }
  }
`,At=`
  mutation DeletePost($id: UUID!) {
    deletePost(id: $id) {
      success
      errorMessages
      payload { id }
    }
  }
`,Ct=`
  mutation SetPostPinned($postId: UUID!, $pinned: Boolean!) {
    setPostPinned(postId: $postId, pinned: $pinned) {
      success
      errorMessages
      payload { id isPinned pinnedAt }
    }
  }
`,ht=`
  mutation SetPostComment($input: SetPostCommentInput!) {
    setPostComment(input: $input) {
      success
      errorMessages
      payload {
        id
        postId
        workspaceClientId
        content
        createdAt
        updatedAt
      }
    }
  }
`,kt=`
  mutation DeletePostComment($id: UUID!) {
    deletePostComment(id: $id) {
      success
      errorMessages
      payload { id }
    }
  }
`,St=`
  mutation TogglePostLike($postId: UUID!) {
    togglePostLike(postId: $postId) {
      success
      errorMessages
      payload
    }
  }
`,Tt=`
  mutation SetPostPollVote($postId: UUID!, $optionId: UUID!) {
    setPostPollVote(postId: $postId, optionId: $optionId) {
      success
      errorMessages
      payload
    }
  }
`,Et=`
  mutation SetPostEventRsvp($postId: UUID!, $status: String!) {
    setPostEventRsvp(postId: $postId, status: $status) {
      success
      errorMessages
      payload
    }
  }
`,wt=`
  mutation SetPostTag($input: SetPostTagInput!) {
    setPostTag(input: $input) {
      success
      errorMessages
      payload { id workspaceId name slug }
    }
  }
`,Ot=`
  mutation DeletePostTag($id: UUID!) {
    deletePostTag(id: $id) {
      success
      errorMessages
      payload { id }
    }
  }
`,Rt="GENERAL",Ft="ANNOUNCEMENT",Vt="EVENT",Jt="GENERAL",qt="POLL",Yt="EVENT",jt="ALL",zt="SPECIFIC",Kt="GOING",Qt="MAYBE",Zt="NOT_GOING";class I extends Error{slugs;constructor(t){super(t.join(", ")||"operation_failed"),this.name="BoardApiError",this.slugs=t}}function bt(e,t){if(!e)return!1;const s=new Set(t.filter(i=>i.name.trim().toLowerCase()==="board-create").map(i=>i.id).filter(Boolean));if(s.size===0)return!1;const o=i=>i.some(g=>s.has(g));return e.audienceTargetType.trim().toUpperCase()==="ALL"?o(e.permissionIds):e.targetWorkspaceClients.some(i=>o(i.permissionIds))||e.targetClientGroups.some(i=>o(i.permissionIds))}function d(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function l(e,t=""){return e==null?t:String(e)}function c(e){if(e==null)return null;const t=String(e).trim();return t||null}function B(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){const s=Number(e);if(Number.isFinite(s))return s}return t}function F(e){return Array.isArray(e)?e.map(t=>t==null?"":String(t)).filter(t=>t.trim().length>0):[]}function Oe(e){if(e==null)return null;if(typeof e=="string"){const t=e.trim();return t||null}if(typeof e=="object")try{return JSON.stringify(e)}catch{return null}return null}class G{constructor(t){this.values=t}values;static empty(){return new G({})}static fromJsonString(t){if(!t?.trim())return G.empty();try{const s=JSON.parse(t);if(d(s))return new G({...s})}catch{}return G.empty()}get coverPhoto(){const t=this.values.coverPhoto;if(d(t)){const s=c(t.fileUrl);if(s)return{fileUrl:s,fileId:l(t.fileId)}}for(const s of["coverUrl","imageUrl","coverImageUrl","cover"]){const o=c(this.values[s]);if(o)return{fileUrl:o,fileId:""}}return null}copyWith(t){const s={...this.values};for(const o of["coverUrl","imageUrl","coverImageUrl","cover"])delete s[o];return t.clearCoverPhoto?delete s.coverPhoto:t.coverPhoto&&(s.coverPhoto={fileUrl:t.coverPhoto.fileUrl,fileId:t.coverPhoto.fileId}),new G(s)}toJson(){return{...this.values}}toJsonStringOrNull(){return Object.keys(this.values).length>0?JSON.stringify(this.values):null}}class U{constructor(t){this.values=t}values;static empty(){return new U({})}static fromJsonString(t){if(!t?.trim())return U.empty();try{const s=JSON.parse(t);if(d(s))return new U({...s})}catch{}return U.empty()}get coverPhoto(){const t=this.values.coverPhoto;if(d(t)){const s=c(t.fileUrl);if(s)return{fileUrl:s,fileId:l(t.fileId)}}return null}get content(){return c(this.values.content)}get attachedFiles(){const t=this.values.attachedFiles;return Array.isArray(t)?t.filter(d).map(s=>({fileName:l(s.fileName),fileUrl:l(s.fileUrl),fileId:l(s.fileId)})).filter(s=>s.fileUrl.length>0):[]}value(t){return this.values[t]??null}copyWith(t){const s={...this.values};return t.clearCoverPhoto?delete s.coverPhoto:t.coverPhoto&&(s.coverPhoto={fileUrl:t.coverPhoto.fileUrl,fileId:t.coverPhoto.fileId}),t.clearContent?delete s.content:t.content!=null&&(s.content=t.content),t.clearAttachedFiles?delete s.attachedFiles:t.attachedFiles&&(s.attachedFiles=t.attachedFiles.map(o=>({...o}))),new U(s)}copyWithValue(t,s){const o={...this.values};return s==null?delete o[t]:o[t]=s,new U(o)}toJson(){return{...this.values}}toJsonStringOrNull(){return Object.keys(this.values).length>0?JSON.stringify(this.values):null}}function m(e,t){const s=e[t];if(!d(s))throw new I(["invalid_response"]);if(s.success!==!0){const o=F(s.errorMessages);throw new I(o.length>0?o:["operation_failed"])}return s}function ee(e,t){const s=m(e,t);if(!d(s.payload))throw new I(["could_not_delete"]);return l(s.payload.id)}function ae(e){return{id:l(e.id),title:l(e.title),description:c(e.description),type:l(e.type,"GENERAL"),audienceTargetType:l(e.audienceTargetType,"ALL"),ownerWorkspaceId:l(e.ownerWorkspaceId),settings:Oe(e.settings),postsCount:B(e.postsCount),permissionIds:F(e.permissionIds),targetWorkspaceClients:Te(e.targetWorkspaceClients),targetClientGroups:Te(e.targetClientGroups),createdAt:c(e.createdAt),updatedAt:c(e.updatedAt)}}function Te(e){return Array.isArray(e)?e.filter(d).map(t=>({id:l(t.id),permissionIds:F(t.permissionIds)})):[]}function _t(e){return{id:l(e.id),name:l(e.name)}}function ie(e){return{id:l(e.id),workspaceId:l(e.workspaceId),name:l(e.name),slug:l(e.slug)}}function Bt(e){const t=(Array.isArray(e.options)?e.options:[]).filter(d).map(s=>({id:l(s.id),label:l(s.label),sortOrder:B(s.sortOrder),voteCount:B(s.voteCount)})).sort((s,o)=>s.sortOrder-o.sortOrder);return{expiresAt:c(e.expiresAt),isExpired:e.isExpired===!0,votedOptionId:c(e.votedOptionId),options:t}}function Nt(e){return{startsAt:c(e.startsAt),endsAt:c(e.endsAt),expiresAt:c(e.expiresAt),isExpired:e.isExpired===!0,goingCount:B(e.goingCount),maybeCount:B(e.maybeCount),notGoingCount:B(e.notGoingCount),myRsvpStatus:c(e.myRsvpStatus)}}function le(e){const t=d(e.poll)?Bt(e.poll):null,s=d(e.event)?Nt(e.event):null,o=typeof e.isPinned=="boolean"?e.isPinned:e.pinnedAt!=null;return{id:l(e.id),boardId:l(e.boardId),name:l(e.name),subtitle:c(e.subtitle),type:l(e.type,"GENERAL"),likeCount:B(e.likeCount),commentsCount:B(e.commentsCount),audienceTargetType:l(e.audienceTargetType,"ALL"),ownerWorkspaceId:l(e.ownerWorkspaceId),metadata:Oe(e.metadata),likedByMe:e.likedByMe===!0,isPinned:o,pinnedAt:c(e.pinnedAt),tags:(Array.isArray(e.tags)?e.tags:[]).filter(d).map(ie),targetWorkspaceClientIds:F(e.targetWorkspaceClientIds),targetClientGroupIds:F(e.targetClientGroupIds),poll:t,event:s,createdAt:c(e.createdAt),updatedAt:c(e.updatedAt)}}function Ee(e){if(!d(e.payload))return{items:[],nextCursor:null,hasNextPage:!1};const t=e.payload;return{items:(Array.isArray(t.items)?t.items:[]).filter(d).map(le),nextCursor:c(t.nextCursor),hasNextPage:t.hasNextPage===!0}}function we(e){const t=d(e.workspaceClient)?e.workspaceClient:null;return{id:l(e.id),postId:l(e.postId),workspaceClientId:l(e.workspaceClientId),content:l(e.content),createdAt:c(e.createdAt),updatedAt:c(e.updatedAt),workspaceClient:t?{id:l(t.id),firstName:c(t.firstName),lastName:c(t.lastName),email:c(t.email)}:null}}function be(e){return{targetType:e.targetType,permissionIds:e.permissionIds,workspaceClients:e.workspaceClients.map(t=>({id:t.id,permissionIds:t.permissionIds})),clientGroups:e.clientGroups.map(t=>({id:t.id,permissionIds:t.permissionIds}))}}function Lt(e){const t={workspaceId:e.workspaceId,title:e.title,type:e.type,audience:be(e.audience)},s=e.id?.trim();return s&&(t.id=s),e.description!=null&&(t.description=e.description),e.settings!=null&&(t.settings=e.settings),t}function $t(e){const t={boardId:e.boardId,name:e.name,type:e.type,tagIds:e.tagIds,audience:be(e.audience)},s=e.id?.trim();if(s&&(t.id=s),e.subtitle!=null&&(t.subtitle=e.subtitle),e.metadata!=null&&(t.metadata=e.metadata),e.poll&&(t.poll={expiresAt:e.poll.expiresAt,options:e.poll.options.map(o=>{const i={label:o.label,sortOrder:o.sortOrder},g=o.id?.trim();return g&&(i.id=g),i})}),e.event){const o={startsAt:e.event.startsAt,expiresAt:e.event.expiresAt};e.event.endsAt!=null&&(o.endsAt=e.event.endsAt),t.event=o}return t}const p={async listBoards(e){const t=await _(ut,{workspaceId:e}),s=m(t,"boards");return Array.isArray(s.payload)?s.payload.filter(d).map(ae):[]},async getBoard(e){const t=await _(dt,{id:e}),s=m(t,"board");if(!d(s.payload))throw new I(["board_not_found"]);return ae(s.payload)},async listBoardPermissions(e){const t=await _(ct,{workspaceId:e}),s=m(t,"boardPermissions");return Array.isArray(s.payload)?s.payload.filter(d).map(_t):[]},async listPosts(e){const t=Math.min(50,Math.max(1,Math.trunc(e.first??20))),s=e.tagIds??[],o=e.after?.trim()?e.after:null;if(e.workspaceId&&!e.boardId){const g=await _(ft,{input:{workspaceId:e.workspaceId,tagIds:s,first:t,after:o}});return Ee(m(g,"postsByWorkspace"))}const i=await _(pt,{input:{boardId:e.boardId,tagIds:s,first:t,after:o}});return Ee(m(i,"posts"))},async getPost(e){const t=await _(vt,{id:e}),s=m(t,"post");if(!d(s.payload))throw new I(["post_not_found"]);return le(s.payload)},async listComments(e){const t=await _(mt,{postId:e}),s=m(t,"postComments");return Array.isArray(s.payload)?s.payload.filter(d).map(we):[]},async listPostTags(e){const t=await _(gt,{workspaceId:e}),s=m(t,"postTags");return Array.isArray(s.payload)?s.payload.filter(d).map(ie):[]},async setBoard(e){const t=await P(yt,{input:Lt(e)}),s=m(t,"setBoard");if(!d(s.payload))throw new I(["could_not_set_board"]);return ae(s.payload)},async deleteBoard(e){const t=await P(Pt,{id:e});return ee(t,"deleteBoard")},async setPost(e){const t=await P(It,{input:$t(e)}),s=m(t,"setPost");if(!d(s.payload))throw new I(["could_not_set_post"]);return le(s.payload)},async deletePost(e){const t=await P(At,{id:e});return ee(t,"deletePost")},async setPostPinned(e,t){const s=await P(Ct,{postId:e,pinned:t}),o=m(s,"setPostPinned");if(!d(o.payload))throw new I(["could_not_pin_post"]);const i=o.payload,g=typeof i.isPinned=="boolean"?i.isPinned:t;return{id:l(i.id,e),isPinned:g,pinnedAt:c(i.pinnedAt)}},async setPostComment(e){const t={postId:e.postId,content:e.content},s=e.id?.trim();s&&(t.id=s);const o=await P(ht,{input:t}),i=m(o,"setPostComment");if(!d(i.payload))throw new I(["could_not_set_comment"]);return we(i.payload)},async deletePostComment(e){const t=await P(kt,{id:e});return ee(t,"deletePostComment")},async setPostTag(e){const t={workspaceId:e.workspaceId,name:e.name},s=e.id?.trim();s&&(t.id=s);const o=await P(wt,{input:t}),i=m(o,"setPostTag");if(!d(i.payload))throw new I(["could_not_set_tag"]);return ie(i.payload)},async deletePostTag(e){const t=await P(Ot,{id:e});return ee(t,"deletePostTag")},async toggleLike(e){const t=await P(St,{postId:e});return m(t,"togglePostLike").payload===!0},async votePoll(e,t){const s=await P(Tt,{postId:e,optionId:t});return m(s,"setPostPollVote").payload===!0},async rsvp(e,t){const s=await P(Et,{postId:e,status:t}),o=m(s,"setPostEventRsvp");return o.payload==null?"":String(o.payload)}};function Ut(e,t){let s=0;for(const o of e){const i=t[o.id];if(i===void 0)continue;const g=o.postsCount-i;g>0&&(s+=g)}return s}function Mt(e,t){const s={};for(const o of e){const i=t[o.id];s[o.id]=i===void 0||i>o.postsCount?o.postsCount:i}return s}function oe(e){const t=e?.trim();return t||null}function xt(e){return e.sessionIsLegalPerson?oe(e.sessionWorkspaceId):oe(e.selectedWorkspaceId)??oe(e.sessionWorkspaceId)}const re=20;function R(e,t){if(e instanceof I){for(const s of e.slugs){const o=`boards.errors.${s}`;if(X.global.te(o))return X.global.t(o)}return X.global.t("boards.errorGeneric")}return e instanceof Error&&e.message?e.message:X.global.t(t)}const Ht=ot("boards",()=>{const e=rt(),t=it(),s=lt(),o=u([]),i=u(!1),g=u(null),M=u([]),te=u(null),h=u([]),se=u(null),k=u(null),S=u(null),A=u([]),C=u({}),v=u([]),T=u(!1),x=u(!1),E=u(null),w=u(null),O=u(!1);let y=0;const V=u([]),W=u(!1),J=u(null),N=u(new Set),q=u(!1),Y=u(null),j=u(!1),z=u(null),K=u(null),Q=u(!1),ce=u(!1),D=$(()=>xt({sessionIsLegalPerson:t.sessionIsLegalPerson,sessionWorkspaceId:t.sessionWorkspaceId,selectedWorkspaceId:t.selectedWorkspaceIdStrict})),pe=$(()=>s.hasManagerMenu),Z=$(()=>t.sessionIsLegalPerson?Se(t.sessionWorkspace,e.userId)?!0:pe.value:!1),fe=$(()=>{const n=t.sessionIsLegalPerson?t.sessionWorkspace:t.selectedWorkspace;return Se(n,e.userId)?!0:t.sessionIsLegalPerson?pe.value:!1}),_e=$(()=>!Z.value);function ve(n){return Z.value||fe.value||bt(n,M.value)}const Be=$(()=>ve(S.value)),Ne=$(()=>Ut(o.value,C.value));function me(){const n=D.value,a=e.userId;return!n||!a?null:`boards_last_seen_${a}_${n}`}function Le(){const n=me();C.value=n?ke.getJson(n)??{}:{}}function ge(){const n=me();n&&ke.setJson(n,C.value)}function ye(n,a){n&&C.value[n]!==a&&(C.value={...C.value,[n]:a},ge())}function $e(n){const a=[...new Set(n.map(f=>f.trim()).filter(Boolean))];a.length===A.value.length&&a.every((f,L)=>f===A.value[L])||(A.value=a,k.value&&ne())}function Ue(n,a="boards.errorGeneric"){return R(n,a)}async function Me(){const n=D.value;if(!n){o.value=[];return}i.value=!0,g.value=null;try{o.value=await p.listBoards(n),Le(),C.value=Mt(o.value,C.value),ge()}catch(a){o.value=[],g.value=R(a,"boards.errorLoadBoards")}finally{i.value=!1}}async function Pe(n=!1){const a=D.value;return a?(!n&&te.value===a||(M.value=await p.listBoardPermissions(a),te.value=a),M.value):[]}async function xe(n){const a=await p.setBoard(n),r=o.value.some(f=>f.id===a.id);return o.value=r?o.value.map(f=>f.id===a.id?a:f):[a,...o.value],S.value?.id===a.id&&(S.value=a),a}async function De(n){await p.deleteBoard(n),o.value=o.value.filter(a=>a.id!==n),k.value===n&&Ie()}async function Ge(n,a){const r=++y;k.value=n,S.value=null,A.value=a?.tagIds?[...a.tagIds]:[],v.value=[],w.value=null,O.value=!1,E.value=null,T.value=!0,Pe().catch(()=>{});try{const[f,L]=await Promise.all([p.getBoard(n),p.listPosts({boardId:n,first:re,tagIds:A.value})]);if(r!==y)return;S.value=f,v.value=L.items,w.value=L.nextCursor,O.value=L.hasNextPage,ye(n,f.postsCount)}catch(f){if(r!==y)return;E.value=R(f,"boards.errorLoadPosts")}finally{r===y&&(T.value=!1)}}function Ie(){y+=1,k.value=null,S.value=null,A.value=[],v.value=[],T.value=!1,x.value=!1,E.value=null,w.value=null,O.value=!1,he()}async function ne(){const n=k.value;if(!n)return;const a=++y;v.value.length===0&&(T.value=!0),E.value=null;try{const r=await p.listPosts({boardId:n,first:re,tagIds:A.value});if(a!==y)return;v.value=r.items,w.value=r.nextCursor,O.value=r.hasNextPage}catch(r){if(a!==y)return;E.value=R(r,"boards.errorLoadPosts")}finally{a===y&&(T.value=!1)}}async function We(){const n=k.value;if(!n||T.value||x.value||!O.value||!w.value)return;const a=y;x.value=!0;try{const r=await p.listPosts({boardId:n,first:re,after:w.value,tagIds:A.value});if(a!==y)return;v.value=[...v.value,...r.items],w.value=r.nextCursor,O.value=r.hasNextPage}catch(r){if(a!==y)return;E.value=R(r,"boards.errorLoadPosts")}finally{a===y&&(x.value=!1)}}function Ae(n){if(v.value.some(a=>a.id===n.id)){b(n);return}v.value=[n,...v.value]}function b(n){v.value=v.value.map(a=>a.id===n.id?n:a)}function Ce(n){v.value=v.value.filter(a=>a.id!==n)}async function Re(n){const a=await p.setPost(n);return Ae(a),a}async function Fe(n){await p.deletePost(n.id),Ce(n.id)}async function Ve(n){const a=await p.setPostPinned(n.id,!n.isPinned);v.value=v.value.map(r=>r.id===n.id?{...r,isPinned:a.isPinned,pinnedAt:a.pinnedAt}:r),await ne()}async function Je(n){const a=n,r=!n.likedByMe;b({...n,likedByMe:r,likeCount:Math.max(0,n.likeCount+(r?1:-1))});try{const f=await p.toggleLike(n.id),L=await p.getPost(n.id);b({...L,likedByMe:f})}catch(f){throw b(a),f}}async function qe(n,a){await p.votePoll(n,a);const r=await p.getPost(n);b(r)}async function Ye(n,a){await p.rsvp(n,a);const r=await p.getPost(n);b(r)}function je(n){J.value=n,Q.value=!0,H(n.id)}function he(){Q.value=!1,J.value=null,V.value=[],W.value=!1}async function H(n){W.value=!0;try{const a=await p.listComments(n);V.value=a;const r=v.value.find(f=>f.id===n);r&&b({...r,commentsCount:a.length})}finally{W.value=!1}}async function ze(n,a){const r=await p.setPostComment({postId:n,content:a});N.value=new Set([...N.value,r.id]),await H(n)}async function Ke(n){if(await p.deletePostComment(n.id),N.value.has(n.id)){const a=new Set(N.value);a.delete(n.id),N.value=a}await H(n.postId)}function Qe(n){return Z.value||N.value.has(n.id)}async function Ze(n=!1){const a=D.value;return a?(!n&&se.value===a||(h.value=await p.listPostTags(a),se.value=a),h.value):[]}async function He(n){const a=D.value;if(!a)throw new I(["workspace_missing"]);const r=await p.setPostTag({workspaceId:a,name:n});return h.value=[...h.value.filter(f=>f.id!==r.id),r],r}async function Xe(n){await p.deletePostTag(n),h.value=h.value.filter(a=>a.id!==n)}function et(n=null){Y.value=n,q.value=!0}function tt(){q.value=!1,Y.value=null}function st(n,a=null){K.value=n,z.value=a,j.value=!0}function nt(){j.value=!1,z.value=null,K.value=null}function at(){y+=1,o.value=[],i.value=!1,g.value=null,M.value=[],te.value=null,h.value=[],se.value=null,k.value=null,S.value=null,A.value=[],C.value={},v.value=[],T.value=!1,x.value=!1,E.value=null,w.value=null,O.value=!1,V.value=[],W.value=!1,J.value=null,N.value=new Set,q.value=!1,Y.value=null,j.value=!1,z.value=null,K.value=null,Q.value=!1,ce.value=!1}return{boards:o,boardsLoading:i,boardsError:g,permissions:M,tags:h,activeBoardId:k,activeBoard:S,activeTagIds:A,lastSeen:C,posts:v,postsLoading:T,postsLoadingMore:x,postsError:E,hasNextPage:O,comments:V,commentsLoading:W,commentsPost:J,boardFormVisible:q,editingBoard:Y,postFormVisible:j,editingPost:z,postFormBoardId:K,commentsVisible:Q,tagsManagerVisible:ce,ownerWorkspaceId:D,isManager:Z,managesBoardOwner:fe,canEngage:_e,canCreatePost:Be,canCreatePostFor:ve,unreadCount:Ne,markBoardSeen:ye,setActiveTags:$e,describeError:Ue,loadBoards:Me,ensurePermissions:Pe,saveBoard:xe,removeBoard:De,openBoard:Ge,closeBoard:Ie,reloadPosts:ne,loadMorePosts:We,upsertPost:Ae,replacePost:b,removePostById:Ce,savePost:Re,deletePost:Fe,togglePinned:Ve,toggleLike:Je,votePoll:qe,rsvp:Ye,openComments:je,closeComments:he,reloadComments:H,addComment:ze,deleteComment:Ke,canDeleteComment:Qe,loadTags:Ze,createTag:He,deleteTag:Xe,openBoardForm:et,closeBoardForm:tt,openPostForm:st,closePostForm:nt,reset:at}});export{jt as A,G as B,qt as P,Kt as R,Qt as a,p as b,Zt as c,Yt as d,U as e,zt as f,Rt as g,Ft as h,Vt as i,Jt as j,Ht as u};
