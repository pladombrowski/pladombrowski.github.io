import{ae as l,S as u}from"./index-D4QDpgXN.js";class c extends Error{slugs;constructor(t){super(t.join(", ")||"operation_failed"),this.name="BoardApiError",this.slugs=t}}function g(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function I(e,t=""){return e==null?t:String(e)}function C(e){if(e==null)return null;const t=String(e).trim();return t||null}function N(e){if(e==null)return null;if(typeof e=="string"){const t=e.trim();return t||null}if(typeof e=="object")try{return JSON.stringify(e)}catch{return null}return null}class f{constructor(t){this.values=t}values;static empty(){return new f({})}static fromJsonString(t){if(!t?.trim())return f.empty();try{const s=JSON.parse(t);if(g(s))return new f({...s})}catch{}return f.empty()}get coverPhoto(){const t=this.values.coverPhoto;if(g(t)){const s=C(t.fileUrl);if(s)return{fileUrl:s,fileId:I(t.fileId)}}for(const s of["coverUrl","imageUrl","coverImageUrl","cover"]){const o=C(this.values[s]);if(o)return{fileUrl:o,fileId:""}}return null}copyWith(t){const s={...this.values};for(const o of["coverUrl","imageUrl","coverImageUrl","cover"])delete s[o];return t.clearCoverPhoto?delete s.coverPhoto:t.coverPhoto&&(s.coverPhoto={fileUrl:t.coverPhoto.fileUrl,fileId:t.coverPhoto.fileId}),new f(s)}toJson(){return{...this.values}}toJsonStringOrNull(){return Object.keys(this.values).length>0?JSON.stringify(this.values):null}}class y{constructor(t){this.values=t}values;static empty(){return new y({})}static fromJsonString(t){if(!t?.trim())return y.empty();try{const s=JSON.parse(t);if(g(s))return new y({...s})}catch{}return y.empty()}get coverPhoto(){const t=this.values.coverPhoto;if(g(t)){const s=C(t.fileUrl);if(s)return{fileUrl:s,fileId:I(t.fileId)}}return null}get content(){return C(this.values.content)}get attachedFiles(){const t=this.values.attachedFiles;return Array.isArray(t)?t.filter(g).map(s=>({fileName:I(s.fileName),fileUrl:I(s.fileUrl),fileId:I(s.fileId)})).filter(s=>s.fileUrl.length>0):[]}value(t){return this.values[t]??null}copyWith(t){const s={...this.values};return t.clearCoverPhoto?delete s.coverPhoto:t.coverPhoto&&(s.coverPhoto={fileUrl:t.coverPhoto.fileUrl,fileId:t.coverPhoto.fileId}),t.clearContent?delete s.content:t.content!=null&&(s.content=t.content),t.clearAttachedFiles?delete s.attachedFiles:t.attachedFiles&&(s.attachedFiles=t.attachedFiles.map(o=>({...o}))),new y(s)}copyWithValue(t,s){const o={...this.values};return s==null?delete o[t]:o[t]=s,new y(o)}toJson(){return{...this.values}}toJsonStringOrNull(){return Object.keys(this.values).length>0?JSON.stringify(this.values):null}}function oe(e,t){if(!e)return!1;const s=new Set(t.filter(r=>r.name.trim().toLowerCase()==="board-create").map(r=>r.id).filter(Boolean));if(s.size===0)return!1;const o=r=>r.some(p=>s.has(p));return e.audienceTargetType.trim().toUpperCase()==="ALL"?o(e.permissionIds):e.targetWorkspaceClients.some(r=>o(r.permissionIds))||e.targetClientGroups.some(r=>o(r.permissionIds))}function a(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function n(e,t=""){return e==null?t:String(e)}function i(e){if(e==null)return null;const t=String(e).trim();return t||null}function m(e,t=0){if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){const s=Number(e);if(Number.isFinite(s))return s}return t}function P(e){return Array.isArray(e)?e.map(t=>t==null?"":String(t)).filter(t=>t.trim().length>0):[]}const S=`
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
`,h=`
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
`,U=`
  query Boards($workspaceId: UUID!) {
    boards(workspaceId: $workspaceId) {
      success
      errorMessages
      payload {
        ${S}
      }
    }
  }
`,b=`
  query Board($id: UUID!) {
    board(id: $id) {
      success
      errorMessages
      payload {
        ${S}
      }
    }
  }
`,B=`
  query BoardPermissions($workspaceId: UUID!) {
    boardPermissions(workspaceId: $workspaceId) {
      success
      errorMessages
      payload { id name }
    }
  }
`,D=`
  query Posts($input: GetPostsInput!) {
    posts(input: $input) {
      success
      errorMessages
      payload {
        hasNextPage
        nextCursor
        items {
          ${h}
        }
      }
    }
  }
`,L=`
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
`,x=`
  query Post($id: UUID!) {
    post(id: $id) {
      success
      errorMessages
      payload {
        ${h}
      }
    }
  }
`,G=`
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
`,M=`
  query PostTags($workspaceId: UUID!) {
    postTags(workspaceId: $workspaceId) {
      success
      errorMessages
      payload { id workspaceId name slug }
    }
  }
`,R=`
  mutation SetBoard($input: SetBoardInput!) {
    setBoard(input: $input) {
      success
      errorMessages
      payload {
        ${S}
      }
    }
  }
`,w=`
  mutation DeleteBoard($id: UUID!) {
    deleteBoard(id: $id) {
      success
      errorMessages
      payload { id }
    }
  }
`,W=`
  mutation SetPost($input: SetPostInput!) {
    setPost(input: $input) {
      success
      errorMessages
      payload {
        ${h}
      }
    }
  }
`,V=`
  mutation DeletePost($id: UUID!) {
    deletePost(id: $id) {
      success
      errorMessages
      payload { id }
    }
  }
`,F=`
  mutation SetPostPinned($postId: UUID!, $pinned: Boolean!) {
    setPostPinned(postId: $postId, pinned: $pinned) {
      success
      errorMessages
      payload { id isPinned pinnedAt }
    }
  }
`,q=`
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
`,J=`
  mutation DeletePostComment($id: UUID!) {
    deletePostComment(id: $id) {
      success
      errorMessages
      payload { id }
    }
  }
`,Y=`
  mutation TogglePostLike($postId: UUID!) {
    togglePostLike(postId: $postId) {
      success
      errorMessages
      payload
    }
  }
`,j=`
  mutation SetPostPollVote($postId: UUID!, $optionId: UUID!) {
    setPostPollVote(postId: $postId, optionId: $optionId) {
      success
      errorMessages
      payload
    }
  }
`,z=`
  mutation SetPostEventRsvp($postId: UUID!, $status: String!) {
    setPostEventRsvp(postId: $postId, status: $status) {
      success
      errorMessages
      payload
    }
  }
`,K=`
  mutation SetPostTag($input: SetPostTagInput!) {
    setPostTag(input: $input) {
      success
      errorMessages
      payload { id workspaceId name slug }
    }
  }
`,Q=`
  mutation DeletePostTag($id: UUID!) {
    deletePostTag(id: $id) {
      success
      errorMessages
      payload { id }
    }
  }
`,ne="GENERAL",re="ANNOUNCEMENT",ae="EVENT",ie="GENERAL",de="POLL",le="EVENT",ce="ALL",pe="SPECIFIC",ue="GOING",me="MAYBE",ye="NOT_GOING";function d(e,t){const s=e[t];if(!a(s))throw new c(["invalid_response"]);if(s.success!==!0){const o=P(s.errorMessages);throw new c(o.length>0?o:["operation_failed"])}return s}function A(e,t){const s=d(e,t);if(!a(s.payload))throw new c(["could_not_delete"]);return n(s.payload.id)}function E(e){return{id:n(e.id),title:n(e.title),description:i(e.description),type:n(e.type,"GENERAL"),audienceTargetType:n(e.audienceTargetType,"ALL"),ownerWorkspaceId:n(e.ownerWorkspaceId),settings:N(e.settings),postsCount:m(e.postsCount),permissionIds:P(e.permissionIds),targetWorkspaceClients:O(e.targetWorkspaceClients),targetClientGroups:O(e.targetClientGroups),createdAt:i(e.createdAt),updatedAt:i(e.updatedAt)}}function O(e){return Array.isArray(e)?e.filter(a).map(t=>({id:n(t.id),permissionIds:P(t.permissionIds)})):[]}function H(e){return{id:n(e.id),name:n(e.name)}}function T(e){return{id:n(e.id),workspaceId:n(e.workspaceId),name:n(e.name),slug:n(e.slug)}}function X(e){const t=(Array.isArray(e.options)?e.options:[]).filter(a).map(s=>({id:n(s.id),label:n(s.label),sortOrder:m(s.sortOrder),voteCount:m(s.voteCount)})).sort((s,o)=>s.sortOrder-o.sortOrder);return{expiresAt:i(e.expiresAt),isExpired:e.isExpired===!0,votedOptionId:i(e.votedOptionId),options:t}}function Z(e){return{startsAt:i(e.startsAt),endsAt:i(e.endsAt),expiresAt:i(e.expiresAt),isExpired:e.isExpired===!0,goingCount:m(e.goingCount),maybeCount:m(e.maybeCount),notGoingCount:m(e.notGoingCount),myRsvpStatus:i(e.myRsvpStatus)}}function v(e){const t=a(e.poll)?X(e.poll):null,s=a(e.event)?Z(e.event):null,o=typeof e.isPinned=="boolean"?e.isPinned:e.pinnedAt!=null;return{id:n(e.id),boardId:n(e.boardId),name:n(e.name),subtitle:i(e.subtitle),type:n(e.type,"GENERAL"),likeCount:m(e.likeCount),commentsCount:m(e.commentsCount),audienceTargetType:n(e.audienceTargetType,"ALL"),ownerWorkspaceId:n(e.ownerWorkspaceId),metadata:N(e.metadata),likedByMe:e.likedByMe===!0,isPinned:o,pinnedAt:i(e.pinnedAt),tags:(Array.isArray(e.tags)?e.tags:[]).filter(a).map(T),targetWorkspaceClientIds:P(e.targetWorkspaceClientIds),targetClientGroupIds:P(e.targetClientGroupIds),poll:t,event:s,createdAt:i(e.createdAt),updatedAt:i(e.updatedAt)}}function k(e){if(!a(e.payload))return{items:[],nextCursor:null,hasNextPage:!1};const t=e.payload;return{items:(Array.isArray(t.items)?t.items:[]).filter(a).map(v),nextCursor:i(t.nextCursor),hasNextPage:t.hasNextPage===!0}}function _(e){const t=a(e.workspaceClient)?e.workspaceClient:null;return{id:n(e.id),postId:n(e.postId),workspaceClientId:n(e.workspaceClientId),content:n(e.content),createdAt:i(e.createdAt),updatedAt:i(e.updatedAt),workspaceClient:t?{id:n(t.id),firstName:i(t.firstName),lastName:i(t.lastName),email:i(t.email)}:null}}function $(e){return{targetType:e.targetType,permissionIds:e.permissionIds,workspaceClients:e.workspaceClients.map(t=>({id:t.id,permissionIds:t.permissionIds})),clientGroups:e.clientGroups.map(t=>({id:t.id,permissionIds:t.permissionIds}))}}function ee(e){const t={workspaceId:e.workspaceId,title:e.title,type:e.type,audience:$(e.audience)},s=e.id?.trim();return s&&(t.id=s),e.description!=null&&(t.description=e.description),e.settings!=null&&(t.settings=e.settings),t}function te(e){const t={boardId:e.boardId,name:e.name,type:e.type,tagIds:e.tagIds,audience:$(e.audience)},s=e.id?.trim();if(s&&(t.id=s),e.subtitle!=null&&(t.subtitle=e.subtitle),e.metadata!=null&&(t.metadata=e.metadata),e.poll&&(t.poll={expiresAt:e.poll.expiresAt,options:e.poll.options.map(o=>{const r={label:o.label,sortOrder:o.sortOrder},p=o.id?.trim();return p&&(r.id=p),r})}),e.event){const o={startsAt:e.event.startsAt,expiresAt:e.event.expiresAt};e.event.endsAt!=null&&(o.endsAt=e.event.endsAt),t.event=o}return t}const fe={async listBoards(e){const t=await u(U,{workspaceId:e}),s=d(t,"boards");return Array.isArray(s.payload)?s.payload.filter(a).map(E):[]},async getBoard(e){const t=await u(b,{id:e}),s=d(t,"board");if(!a(s.payload))throw new c(["board_not_found"]);return E(s.payload)},async listBoardPermissions(e){const t=await u(B,{workspaceId:e}),s=d(t,"boardPermissions");return Array.isArray(s.payload)?s.payload.filter(a).map(H):[]},async listPosts(e){const t=Math.min(50,Math.max(1,Math.trunc(e.first??20))),s=e.tagIds??[],o=e.after?.trim()?e.after:null;if(e.workspaceId&&!e.boardId){const p=await u(L,{input:{workspaceId:e.workspaceId,tagIds:s,first:t,after:o}});return k(d(p,"postsByWorkspace"))}const r=await u(D,{input:{boardId:e.boardId,tagIds:s,first:t,after:o}});return k(d(r,"posts"))},async getPost(e){const t=await u(x,{id:e}),s=d(t,"post");if(!a(s.payload))throw new c(["post_not_found"]);return v(s.payload)},async listComments(e){const t=await u(G,{postId:e}),s=d(t,"postComments");return Array.isArray(s.payload)?s.payload.filter(a).map(_):[]},async listPostTags(e){const t=await u(M,{workspaceId:e}),s=d(t,"postTags");return Array.isArray(s.payload)?s.payload.filter(a).map(T):[]},async setBoard(e){const t=await l(R,{input:ee(e)}),s=d(t,"setBoard");if(!a(s.payload))throw new c(["could_not_set_board"]);return E(s.payload)},async deleteBoard(e){const t=await l(w,{id:e});return A(t,"deleteBoard")},async setPost(e){const t=await l(W,{input:te(e)}),s=d(t,"setPost");if(!a(s.payload))throw new c(["could_not_set_post"]);return v(s.payload)},async deletePost(e){const t=await l(V,{id:e});return A(t,"deletePost")},async setPostPinned(e,t){const s=await l(F,{postId:e,pinned:t}),o=d(s,"setPostPinned");if(!a(o.payload))throw new c(["could_not_pin_post"]);const r=o.payload,p=typeof r.isPinned=="boolean"?r.isPinned:t;return{id:n(r.id,e),isPinned:p,pinnedAt:i(r.pinnedAt)}},async setPostComment(e){const t={postId:e.postId,content:e.content},s=e.id?.trim();s&&(t.id=s);const o=await l(q,{input:t}),r=d(o,"setPostComment");if(!a(r.payload))throw new c(["could_not_set_comment"]);return _(r.payload)},async deletePostComment(e){const t=await l(J,{id:e});return A(t,"deletePostComment")},async setPostTag(e){const t={workspaceId:e.workspaceId,name:e.name},s=e.id?.trim();s&&(t.id=s);const o=await l(K,{input:t}),r=d(o,"setPostTag");if(!a(r.payload))throw new c(["could_not_set_tag"]);return T(r.payload)},async deletePostTag(e){const t=await l(Q,{id:e});return A(t,"deletePostTag")},async toggleLike(e){const t=await l(Y,{postId:e});return d(t,"togglePostLike").payload===!0},async votePoll(e,t){const s=await l(j,{postId:e,optionId:t});return d(s,"setPostPollVote").payload===!0},async rsvp(e,t){const s=await l(z,{postId:e,status:t}),o=d(s,"setPostEventRsvp");return o.payload==null?"":String(o.payload)}};export{ce as A,c as B,de as P,ue as R,fe as a,oe as b,ee as c,E as d,_ as e,v as f,k as g,H as h,pe as i,f as j,ne as k,re as l,ae as m,le as n,ie as o,T as p,y as q,d as r,te as s,me as t,ye as u};
