import{r as e,R as t,_ as r,a,b as s,L as n,f as o,c as l}from"./prefetch.helper-4a4e89e7.js";import{m as i,o as m,v as c}from"./DeleteAppointmentButton-e4b7a1de.js";import{f as u,h as d,u as p}from"./BEConfigProvider-697f66d7.js";import{a as E,u as b,C as f}from"./CustomerFormContent-cbddc6fa.js";import{m as w}from"./store-87403b6b.js";import"./createBookTimeInput.helper-a66a36a8.js";import"./useBreakpoint-2ef0bad1.js";import"./index-f9ec547e.js";import"./useEffectWithTarget-688d6bb0.js";import"./index-ad7a2af3.js";import"./appointment.helper-80ab8c9c.js";import"./phoneInput.helper-24509875.js";import"./index-f3d162c1.js";import"./AvatarPicker-e9de6b9b.js";import"./HiddenInput-2f0ce489.js";import"./holiday.helper-ca9c72dc.js";function h({customer_id:o,onDelete:l,disabled:i}){const[m,c]=e.useState(null);return t.createElement(r.ReactPopover.Root,{onOpenChange:e=>{e&&(async()=>{if(c(null),!o)return;const e=await w({in_args:{customer_id:{values:[o],placeholder:"%d",alias:"booking"}}});c(e)})()}},t.createElement(r.ReactPopover.Trigger,{asChild:!0},t.createElement(r.Button,{className:"bw-mr-auto msm:bw-hidden",disabled:i,size:"icon",color:"error",variant:"outline",tabIndex:-1},t.createElement(a.Trash,null))),t.createElement(u,null,t.createElement("div",{className:"bw-flex bw-items-start bw-gap-2"},t.createElement(a.Info,{className:"bw-h-5 bw-w-5 bw-fill-warning bw-text-base-bg1"}),t.createElement("div",null,t.createElement("span",null,s.sprintf(s.__("Deleting this %(customer)s will cause","bookster"),n)," ",t.createElement("strong",null,null===m?"...":m," Appointments")," ","to be deleted?"," "))),t.createElement(d,null,t.createElement(r.ReactPopover.Close,{asChild:!0},t.createElement(r.Button,{variant:"trivial",size:"small"},"Cancel")),t.createElement(r.ReactPopover.Close,{asChild:!0},t.createElement(r.Button,{size:"small",color:"error",variant:"outline",onClick:()=>l()},"Delete")))))}function v(){const{toast:a}=r.useToast(),u=E(),{data:d,isLoading:w}=b(u),v=p();function y(){v("..")}const[g]=o.Form.useForm(),C=l.useQueryClient(),_=l.useMutation({mutationKey:["customers",u,"edit"],mutationFn:({id:e,values:t})=>i(e,t),onSuccess:e=>{C.setQueryData(["customer",u],e),C.invalidateQueries({queryKey:["customers"]})}}),j=l.useMutation({mutationKey:["customers",u,"delete"],mutationFn:m,onSuccess:()=>{C.removeQueries({queryKey:["customer",u]}),C.invalidateQueries({queryKey:["customers"]})}});e.useEffect((()=>{d&&(g.resetFields(),g.setFieldsValue(d))}),[d]);const k=w||!d&&!w||_.isLoading||j.isLoading;return t.createElement(t.Fragment,null,t.createElement(r.DrawerHeader,null,t.createElement(r.DrawerTitle,null,s.sprintf(s.__("Edit %(customer)s","bookster"),n)),t.createElement(r.DrawerCloseIcon,null)),t.createElement(r.DrawerBody,null,t.createElement(r.LoadingOverlay,{loading:k}),t.createElement(o.Form,{form:g,disabled:k,layout:"vertical",scrollToFirstError:!0,onFinish:e=>{!async function(e){if(u&&d)try{e.email&&e.email!==d.email&&await c(e.email),await _.mutateAsync({id:d.customer_id,values:e}),a.success("Customer has been Saved Successfully!"),y()}catch(t){a.error(await l.getErrorMsg(t))}}(e)}},t.createElement(f,null))),t.createElement(r.DrawerFooter,null,d?t.createElement(h,{disabled:k,customer_id:d.customer_id,onDelete:async function(){if(u&&d)try{await j.mutateAsync(d.customer_id),a.success(s.sprintf(s.__("%(customer)s has been Deleted Successfully!","bookster"),n)),y()}catch(e){a.error(await l.getErrorMsg(e))}}}):null,t.createElement(r.DrawerClose,{asChild:!0},t.createElement(r.Button,{key:"back",tabIndex:-1,variant:"trivial",className:"bw-min-w-[8rem]"},s.__("Cancel","bookster"))),t.createElement(r.Button,{key:"submit",disabled:k,className:"bw-min-w-[8rem]",onClick:()=>g.submit()},s.__("Save","bookster"))))}export{v as default};