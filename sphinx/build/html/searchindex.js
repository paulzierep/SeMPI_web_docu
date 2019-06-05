Search.setIndex({docnames:["apidoc/modules","apidoc/pipeline","apidoc/pipeline_tools","apidoc/pipeline_tools.rdkit_utils","apidoc/pipeline_tools.specificity","chapters/database_screening","chapters/genome_browser","chapters/genome_input","chapters/prediction_algo","chapters/primer","chapters/update_log","index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,sphinx:56},filenames:["apidoc/modules.rst","apidoc/pipeline.rst","apidoc/pipeline_tools.rst","apidoc/pipeline_tools.rdkit_utils.rst","apidoc/pipeline_tools.specificity.rst","chapters/database_screening.rst","chapters/genome_browser.rst","chapters/genome_input.rst","chapters/prediction_algo.rst","chapters/primer.rst","chapters/update_log.rst","index.rst"],objects:{"":{pipeline:[1,0,0,"-"],pipeline_tools:[2,0,0,"-"]},"pipeline_tools.cluster_prediction":{combine_blocks:[2,1,1,""],get_functional_cluster:[2,1,1,""],get_functional_cluster_smiles_scoring:[2,1,1,""]},"pipeline_tools.database_handling":{df2mysql:[2,1,1,""],df2postgres:[2,1,1,""],dummy_input_file:[2,1,1,""],project2zip:[2,1,1,""]},"pipeline_tools.dataframe_curation":{add_reorder_based_on_strand:[2,1,1,""],combine_close_doms:[2,1,1,""],df_bool_trimming:[2,1,1,""],float2int:[2,1,1,""],gbk2df:[2,1,1,""],hmmer_length_dict:[2,1,1,""],join_close_genes:[2,1,1,""],remove_overlap:[2,1,1,""]},"pipeline_tools.file_handling":{create_pipeline_meta_df:[2,1,1,""],gbk_sanity_check:[2,1,1,""],input_parsing_initial:[2,1,1,""],input_parsing_single:[2,1,1,""],prepare_multi_entry_mode:[2,1,1,""]},"pipeline_tools.gbk_output_generation":{df2gbk:[2,1,1,""],df2gbk_features:[2,1,1,""],get_blocks:[2,1,1,""],get_cluster:[2,1,1,""],get_domains:[2,1,1,""],get_modules:[2,1,1,""],split_features_per_cluster:[2,1,1,""]},"pipeline_tools.gene_prediction":{prodigal_parser:[2,1,1,""]},"pipeline_tools.genome_diagram":{blockPrinting:[2,1,1,""],change_path_index_gbrowser:[2,1,1,""],draw_diagram:[2,1,1,""],gbk2genomebrowser:[2,1,1,""],gbk2genomebrowser_no_print:[2,1,1,""],get_domain_color_dict:[2,1,1,""]},"pipeline_tools.module_prediction":{assign_end_part:[2,1,1,""],block_module_index:[2,1,1,""],nrps_detection:[2,1,1,""],pks_detection:[2,1,1,""],pks_reduction_shift:[2,1,1,""],regex_pattern_in_list:[2,1,1,""],split_block_by_TE:[2,1,1,""]},"pipeline_tools.protein_prediction":{create_protein_fasta:[2,1,1,""],hmmer_wrapper:[2,1,1,""],protein2bio:[2,1,1,""]},"pipeline_tools.rdkit_utils":{DB_scoring:[3,0,0,"-"],DB_set_up:[3,0,0,"-"],color_tools:[3,0,0,"-"],drawing_tools:[3,0,0,"-"]},"pipeline_tools.rdkit_utils.DB_scoring":{DB_scoring_full:[3,1,1,""],MCS_indices:[3,1,1,""],bond_match_by_MCS:[3,1,1,""],calc_confidence_score:[3,1,1,""],cluster_df_scoring:[3,1,1,""],color_substructs:[3,1,1,""],combine_mols:[3,1,1,""],fingerprint_search:[3,1,1,""],fingerprint_search_custom_DB:[3,1,1,""],get_bonds_of_atoms:[3,1,1,""],keep_mol_atoms_by_indice:[3,1,1,""],remove_mol_atoms_by_indice:[3,1,1,""],score_for_overlap:[3,1,1,""],substructure_match:[3,1,1,""],substructure_match_pd:[3,1,1,""]},"pipeline_tools.rdkit_utils.drawing_tools":{draw_svg:[3,1,1,""],mol2fig_size:[3,1,1,""],mol2svg:[3,1,1,""],mol2svg_with_color:[3,1,1,""],smiles2svg:[3,1,1,""],smiles2svg_auto:[3,1,1,""],smiles2svg_temp:[3,1,1,""],smiles_compute_linear_scaffold:[3,1,1,""],smiles_compute_linear_scaffold_auto:[3,1,1,""]},"pipeline_tools.scoring_standalone_utils":{create_dummy_cluster_df:[2,1,1,""]},"pipeline_tools.specificity":{ml_utils:[4,0,0,"-"],prediction:[4,0,0,"-"],prediction_handler:[4,0,0,"-"],seq_utils:[4,0,0,"-"]},"pipeline_tools.specificity.ml_utils":{add_new_seq_df:[4,1,1,""],class_df2OneHotEncoder:[4,1,1,""],class_dict2df:[4,1,1,""],compute_prediction_count:[4,1,1,""],cross_val_repeated_eval:[4,1,1,""],eval_outlier_detection_cv:[4,1,1,""],remove_outliers:[4,1,1,""],set_min_class_count:[4,1,1,""],trim_test_df:[4,1,1,""]},"pipeline_tools.specificity.prediction":{ML_encoder:[4,2,1,""]},"pipeline_tools.specificity.prediction.ML_encoder":{add_seqs:[4,3,1,""],assign_undefined:[4,3,1,""],class_OneHotEncoder:[4,3,1,""],clean_ML_encoder:[4,3,1,""],create_minimum_alignment:[4,3,1,""],get_alignment:[4,3,1,""],get_class_dict:[4,3,1,""],get_pandas_class_df:[4,3,1,""],predict_seqs:[4,3,1,""],remove_outliers:[4,3,1,""],set_clf:[4,3,1,""]},"pipeline_tools.specificity.prediction_handler":{predict_specificity:[4,1,1,""],use_predictor:[4,1,1,""]},"pipeline_tools.specificity.seq_utils":{align_new_seq:[4,1,1,""],clean_seq_list:[4,1,1,""],csv2class_dict:[4,1,1,""],df2fasta_rec:[4,1,1,""],minimum_fasta_rec:[4,1,1,""],unique_sequence_list:[4,1,1,""]},"pipeline_tools.structure_prediction":{combine_substruct:[2,1,1,""],set_substructure_nrps:[2,1,1,""],set_substructure_pks:[2,1,1,""]},pipeline:{genome_parsing:[1,1,1,""],single_record_genome_parsing:[1,1,1,""],smiles_scoring:[1,1,1,""]},pipeline_tools:{cluster_prediction:[2,0,0,"-"],database_handling:[2,0,0,"-"],dataframe_curation:[2,0,0,"-"],file_handling:[2,0,0,"-"],gbk_output_generation:[2,0,0,"-"],gene_prediction:[2,0,0,"-"],genome_diagram:[2,0,0,"-"],module_prediction:[2,0,0,"-"],protein_prediction:[2,0,0,"-"],rdkit_utils:[3,0,0,"-"],scoring_standalone_utils:[2,0,0,"-"],specificity:[4,0,0,"-"],structure_prediction:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"10000bp":6,"case":11,"class":4,"default":[1,4,5],"export":6,"final":[2,3,4],"float":[2,4],"function":[0,2,3,4,7],"int":[2,3],"long":[2,5],"new":[2,4,7],"public":[5,9],"return":[2,3,4],"short":7,"true":[2,3,4],"try":[7,9],"while":7,But:[6,8],CDS:[2,6,7],DBs:[5,7],FPs:5,For:[2,3,4,5,6],Its:7,MCS:[3,5,7],OHE:4,One:4,PKS:[5,9],The:[1,2,3,4,5,6,7,8,9],Use:11,Used:2,abbrev:8,absolut:9,accord:2,accur:[5,7],acetyltransferas:8,acp:[2,8],activ:1,actual:4,acyl:8,add:[2,4],add_index:2,add_new_seq_df:4,add_reorder_based_on_strand:2,add_seq:4,added:[2,4],addit:[2,5,6,9],addition:7,adenyl:8,adjust:[1,2,3],after:2,algo:3,algorithm:[7,9,11],ali_temp_fold:4,align:4,align_new_seq:4,aligned_test_seq:4,all:[2,3,4,5],alllow:4,allow:[2,5,6,7,10],allow_trans_at:2,almost:3,alreadi:[2,7],also:[2,5,6,7],although:2,alwai:2,amount:[3,5],analysi:[4,7],analyz:6,ani:4,anonym:7,anoth:8,apllic:4,appear:2,appli:[2,4,5],approach:5,archiv:2,area:[2,6],arg:[2,4],arrai:4,art:8,articleland:7,assembl:2,assign:[2,4,7,8,9],assign_end_part:2,assign_undefin:4,at_pk:2,atom:3,attribut:4,auto:3,auto_adjust:3,automat:[0,2,3,7],avail:[6,9],avoid:2,bar:6,base:[2,4,5,7],based_on:2,bcg:9,becaus:3,befor:9,behind:8,below:2,best:[4,7],better:2,between:[2,7],bgc:[2,6],bgc_domain:2,biggest:4,bio:4,bio_record:4,biopython:[2,4],biosynthet:[6,9],bit:5,block:[2,5,6],block_id:2,block_module_index:2,blockprint:2,bond:3,bond_indic:3,bond_match_by_mc:3,bondcompar:3,bool:[2,3,4],both:[3,7],box:7,browser:[2,11],build:5,button:6,c5np00125k:7,calc_confidence_scor:3,calcul:5,call:[2,7],callabl:1,can:[1,2,3,4,5,6,7,9],cannot:[5,7],carboxyl:2,care:[3,9],carrier:8,ccc:2,ccccc:2,cdsb:7,certain:[4,5],chang:[2,3,6,8],change_path_index_gbrows:2,check:[2,4],choic:7,chosen:[5,7],circular:5,class_df2onehotencod:4,class_df:4,class_df_oh:4,class_dict2df:4,class_dict:4,class_field:4,class_onehotencod:4,classifi:4,clean_ml_encod:4,clean_seq_list:4,clearli:9,clf:4,click:6,close:[2,5,7],cluster:[2,3,5,6,7,9],cluster_df:2,cluster_df_scor:3,cluster_dict:3,cluster_dist:2,cluster_id:2,cluster_nam:2,cluster_predict:0,code:2,coeffici:5,collaps:6,collect:5,color:[2,3],color_styl:3,color_substruct:3,color_tool:[0,2],colum:4,column:[2,4],com:[2,7],combin:[2,3],combine_block:2,combine_close_dom:2,combine_mol:3,combine_substruct:2,come:2,comment:7,common:[7,8,11],compar:3,comparison:3,complex:9,compon:9,compound:[3,5,7],comprehens:[0,10],comput:[3,4,5,7],compute_prediction_count:4,condens:8,condit:2,confid:3,confus:7,consol:2,contact:[7,9],contain:[2,3,4,5],contamin:4,content:[0,7],continu:2,contract:6,conveni:2,convert:[2,4],corr:2,corr_domai_id:2,correct:[4,5],correctli:2,correspon:3,correspond:[2,4],could:[2,5,7],count:5,cover:3,creat:[0,2,3,4,5,7,8],create_dummy_cluster_df:2,create_minimum_align:4,create_pipeline_meta_df:2,create_protein_fasta:2,creation:[3,4,7],cross_val_repeated_ev:4,csd:6,csv2class_dict:4,csv:4,csv_kwarg:4,csv_path:4,current:2,custom:[5,7],custom_sdf:3,cv_split:4,d3gb:[2,6],data:[4,7],data_oh:4,databas:[2,7,8,9,11],database_handl:0,datafram:[2,4],dataframe_cur:0,dataset:[4,7],db_input:2,db_score:[0,2],db_scoring_ful:3,db_select:3,db_set_up:[0,2],db_storag:2,decorat:2,defin:[2,3,5,7],definit:2,dehydratas:8,delimit:4,depend:[4,8],describ:0,descript:[0,11],desir:2,detail:[2,4,5,6,10],detect:[2,5,7],develop:0,df2fasta_rec:4,df2gbk:2,df2gbk_featur:2,df2mysql:2,df2postgr:2,df_bool_trim:2,df_learn:4,df_list:2,df_ohe_test_seq:4,df_test:4,dice:5,dict:[2,3,4],differ:[3,4,5],digram:2,direct:6,discri_csv_path:4,displai:[6,9],distanc:7,distinguish:5,divabstract:7,django:2,dna:7,doc:0,docu:3,document:10,doe:[2,5],domain:[2,4,6,7],done:[2,7],download:7,downstream:2,drag:7,draw:[2,3],draw_diagram:2,draw_svg:3,drawing_tool:[0,2],drawn:3,drop:7,dublic:4,due:5,dummi:2,dummy_input_fil:2,duplic:[2,4],each:[1,2,3,4,5,7],easi:7,either:2,element:2,encod:4,end:2,end_column:2,end_part:2,engine_str:2,enough:3,enoylreductas:8,entir:[0,1,2,4,6],entri:[1,2,7],envisag:2,epimer:8,estim:5,eval_outlier_detection_cv:4,even:5,everi:0,exampl:[2,4,5,7],excactli:3,exclud:[2,4],exist:2,expand:6,explain:9,explan:[6,11],explanatori:9,exsist:4,extract:2,f_type:2,fals:[2,3,4],far:4,fasta:[1,2,4,7],fasta_path:[2,4],fasta_rec:4,faster:4,featur:[2,4,5],feature_df:2,feature_list:2,feature_typ:2,field:[2,6,7],fig:[3,7],figur:[3,6],file:[2,4,7],file_handl:0,file_nam:2,file_path:2,final_genom:2,fingerprint:[3,7,11],fingerprint_search:3,fingerprint_search_custom_db:3,first:5,fit:4,flatten:2,float2int:2,folder:2,follow:[5,8],forc:7,foreign:2,forest:4,form:[4,11],format:[6,11],found:7,fragment:[2,5],friendli:9,from:[2,3,4,5,7],front:2,full:[2,8],func:[1,2],further:11,gbk2df:2,gbk2genomebrows:2,gbk2genomebrowser_no_print:2,gbk:[1,2],gbk_df:2,gbk_output_gener:0,gbk_path:2,gbk_record:2,gbk_sanity_check:2,genbank:[2,7],gene:[2,5,6,7,8,9],gene_predict:0,genebank:7,genom:[2,5,11],genome_diagram:0,genome_pars:1,genome_upload:2,get:[2,3,7],get_align:4,get_block:2,get_bonds_of_atom:3,get_class_dict:4,get_clust:2,get_domain:2,get_domain_color_dict:2,get_functional_clust:2,get_functional_cluster_smiles_scor:2,get_modul:2,get_module_typ:2,get_pandas_class_df:4,github:7,give:7,given:[2,3,4],good:[3,4],gov:7,graphic:6,group:2,gui:4,guid:7,handl:4,handler:1,happen:2,has:2,have:[3,7],header:2,help:[6,7,11],here:4,hidden:8,highest:3,hmm:2,hmm_file:2,hmm_length:2,hmm_path:2,hmmer3:2,hmmer:[2,8],hmmer_length_dict:2,hmmer_output_path:2,hmmer_profiles_path:2,hmmer_treshold_fil:2,hmmer_wrapp:2,homologu:8,host:2,hot:4,hot_encod:4,hous:8,hover:9,html:7,http:[2,3,7],hyattpd:7,hydroxli:2,ident:5,identif:[5,7],identifi:5,ids:2,implement:5,includ:[1,2,3,7],incorpor:6,independ:7,index:[0,2],indic:[2,3],indices_of_best_scor:3,individu:1,influenc:4,info:2,inform:[6,7,9],initi:[4,6],input:[2,3,4,11],input_fil:2,input_parsing_initi:2,input_parsing_singl:2,input_path:1,input_typ:4,instead:5,intend:0,interest:[6,7],interg:4,introduct:11,isolationforest:4,item:[2,4],iter:2,its:[6,8],job:7,join:2,join_close_gen:2,joint:5,keep:3,keep_mol_atoms_by_indic:3,kei:[2,3,4],kekul:3,kept:2,keto:8,ketoreductas:8,known:5,kwarg:[1,2,3,4],kwrag:4,label:4,lack:7,larg:4,lead:[2,3,5,7],least:2,length:2,less:4,like:[2,5],limit:[3,5,6,7],line:2,linear:3,list:[2,3,4],load:[2,4],loc_end:2,loc_start:2,localhost:2,locu:2,locus_block:2,locus_df:2,log:[1,11],log_path:3,longest:3,lot:3,m_end:2,m_start:2,mafft:4,mailman:3,main:[1,2],main_mol:3,mainli:0,make:[2,4,9],mani:6,mapper:2,mark:9,markov:8,match:[2,3,4,5,7],match_limit:3,maxim:5,maximum:[7,11],mcs_indic:3,mcs_timeout:3,mean:4,mess:2,messag:3,meta:[2,7],method:4,methyltransferas:8,might:[2,6,7],min:4,min_count:4,min_record:4,minim:4,minimum_fasta_rec:4,ml_encod:4,ml_util:[0,2],mode:7,model:8,modif:5,modifi:9,modul:[6,7,8,11],module_index:2,module_predict:0,module_typ:[2,4],mol2fig_s:3,mol2svg:3,mol2svg_with_color:3,mol:3,molecul:[2,5],molecular:5,molsiz:3,more:[2,9],morgan:[3,5],most:[7,8],much:[3,4],multi:2,multi_record_file_map:2,multipl:[1,2,3,5,6,7],multiply:3,must:[2,3,4],mysql:2,name:[2,3,4,8],name_field:4,natur:[7,9],ncbi:7,need:[2,4,7,9],neg:3,net:3,nevertheless:8,new_df:2,new_record:4,next:3,nice:2,nih:7,nlm:7,non:2,none:[2,3,4],normal:7,note:2,novel:5,novelti:5,nrp:[2,4,5,9],nrps_detect:2,num:3,number:[3,4,7],numpi:0,object:[3,4],occur:8,offset:2,ofp_gbk2:2,often:[2,5],old:2,one:[2,7],onehotencod:4,ones:[4,5],onli:[2,3,4,5,7],only_domain:2,option:[2,7],order:[2,4,5,6],org:7,orient:3,origin:[2,4],otherwis:7,outlier:4,output:[2,4,7],output_fold:2,output_gbk_path:2,outsid:4,overlap:[2,3],overview:11,own:[7,8],packag:[0,11],page:[6,7,11],pair:3,panda:[2,3,4],panel:6,paramet:4,parameter:4,pars:[1,2,4,7],parser:2,part:[2,7],pass:[2,4],password:2,path:[2,3,4],pattern:2,pcp:8,peptidyl:8,per:[3,7],percent:4,perfect:3,perform:[2,3,8],permanenet:7,phmm:8,pickl:4,pipe:2,pipelien:1,pipelin:[2,9,11],pipeline_tool:[0,11],pks:[2,4],pks_detect:2,pks_reduction_shift:2,pleas:[6,7,9],point:1,port:10,posit:[2,4,8],possibl:[2,3,4,5,7,9],post:5,postgr:2,postgresql:2,ppossibl:3,pre:[5,7],predict:[0,2,3,5,6,7,9,11],predict_proba:4,predict_seq:4,predict_specif:4,predicti:4,prediction_handl:[0,2],predictor:4,prepare_multi_entry_mod:2,present:[4,5,8],previou:2,primer:11,print:[2,3],proba_df:4,probabl:4,problem:4,process:[2,3,11],prodig:[2,7],prodigal_pars:2,produc:2,product:[5,7,9],profil:2,project2zip:2,project:[0,2],project_path:2,propag:2,properti:5,prot:4,prot_seq:4,protein2bio:2,protein:[2,11],protein_predict:0,protocol:1,provid:[7,9],pub:7,pure:4,python:2,qualifi:2,queri:3,query_mol:3,query_smil:3,question:[2,9],quiet:2,radiu:5,random:4,rdkit:[2,3,5],rdkit_db:2,rdkit_db_us:2,rdkit_util:[0,2],realign:4,reason:[7,8],record:[1,2,4,7],record_id:2,record_nam:2,recurs:3,red_typ:2,reduc:[3,4],reduce_db:4,reduct:2,ref:3,regex:2,regex_pattern:2,regex_pattern_in_list:2,reinvent:8,relat:2,relev:[6,8],remark:8,remov:[2,3,4],remove_mol_atoms_by_indic:3,remove_outli:4,remove_overlap:2,repeat:4,repres:[3,4,5],result:[2,3,4],result_df:3,result_index_list:2,rsc:7,run:[1,2,3],same:[2,3,5,7,8],samplerecord:7,scaffold:[3,5,9],scaffold_smil:3,score:3,score_for_overlap:3,scoring_standalone_util:0,screen:[7,9,11],screenshot:7,scrip:2,script:2,sdf:7,search:[2,3],searcher:2,see:[2,3,6,7],seem:2,select:[5,6,7],self:[4,7,9],sempi:[0,1,5,6,7,8,9,10],sempi_credenti:2,sempi_input_fil:2,sen:4,sens:2,sensit:8,seq:[2,4],seq_input:4,seq_nam:[2,4],seq_util:[0,2],seqfeatur:2,seqrec:4,sequenc:[2,4,8],server:[0,2,7,11],set:[1,3,4,5,7],set_clf:4,set_genome_brows:2,set_min_class_count:4,set_substructure_nrp:2,set_substructure_pk:2,shift:2,shorten:2,should:[2,3,4],show:4,shown:[2,6],side:[2,6,7],similar:[5,7],simpl:[6,7],singl:2,single_record_genome_pars:1,sitemap:7,size:3,sklearn:4,slightli:4,sloppi:3,small:4,smaller:3,smile:[2,3,7],smiles2svg:3,smiles2svg_auto:3,smiles2svg_temp:3,smiles_compute_linear_scaffold:3,smiles_compute_linear_scaffold_auto:3,smiles_input:2,smiles_scor:1,some:[2,3,5,9],somehow:2,sort:[2,3,4],sourceforg:3,spec:4,specif:[0,2,7],specificti:4,sphinx:10,split:2,split_block_by_t:2,split_features_per_clust:2,sql_id:2,sql_overwrit:2,ss_limit:3,ssp:4,stackoverflow:2,stai:2,stand:7,start:[1,2,7],start_column:2,state:8,step:[4,5,8],still:7,sting:2,storag:[2,4],store:2,str:[2,4],strand:[2,7],strand_column:2,stricter:7,string:[0,2,3,4],structur:3,structure_predict:[0,4],style:[0,3],sub:[2,3],sub_target:4,subfold:2,submiss:9,submit:[2,5,7],submodul:0,subpackag:0,subprocess:[1,2],subsequ:[8,9],subset:4,substrat:[2,4],substruct:[2,3],substructur:[2,3,7,11],substructure_match:3,substructure_match_pd:3,suitabl:4,support:7,suppress:2,surround:6,svg:3,synthas:8,synthax:2,table_nam:2,tag:[2,7],take:[2,3,7,9],taken:2,tanimoto:5,target:[3,4,5],target_mol:3,target_oh:4,target_smil:3,target_ss_match:3,task:7,templat:[2,3],template_gbk_path:2,templet:2,test:4,test_data:4,test_df:4,text:6,thei:[2,7,8],them:7,therefor:[2,3,5,7,9],thi:[0,1,2,3,4,5,7,8],think:[7,9],thioesteras:8,those:7,though:5,thousand:6,threhold:2,threshold:[2,4,7],time:5,timeout:1,tmp_folder:2,todo:3,togeth:[2,6],too:[6,7],tool:[2,4,5,8],top:6,total_bond_match:3,total_match:3,train:[4,7],tran:7,trans_at:2,trim:4,trim_test_df:4,trough:3,tubl:3,tupl:[2,3],two:5,type:[2,4,9],uncheck:7,undefin:[2,4,7],uniqu:2,unique_sequence_list:4,unsort:2,upload:[5,7],upon:9,usag:[0,11],use:[2,4,7],use_predictor:4,useabl:4,used:[2,3,4,7],useful:[6,7],user:[2,5,6,9],uses:[3,5,7,8],using:[0,3,4,5,6,7,8],valu:[2,3,4],variabl:4,vector:5,verbos:[3,4],veri:5,version:7,view:[2,6,7],visual:6,viz:4,web:[0,2,11],websit:[2,11],well:5,were:5,wheel:8,when:[2,3,5,6,7,8],where:[2,4,5,7,8],which:[2,3,4,5,6,7,9],wiki:7,without:[3,4],work:[0,2,3,7],wrapper:2,written:1,wrong:2,wtih:3,www:7,yet:5,you:[6,7,9],your:7,zip:2},titles:["Module documentation of the pipeline","pipeline module","pipeline_tools package","pipeline_tools.rdkit_utils package","pipeline_tools.specificity package","Database screening","Genome browser","Genome input","Prediction","Primer","Updates","Welcome to the SeMPI 2.0 documentation"],titleterms:{"case":5,Use:5,algorithm:5,browser:6,cluster_predict:2,color_tool:3,common:5,content:[2,3,4],databas:5,database_handl:2,dataframe_cur:2,db_score:3,db_set_up:3,detect:8,document:[0,11],domain:8,drawing_tool:3,file_handl:2,fingerprint:5,form:7,format:7,further:7,gbk_output_gener:2,gene_predict:2,genom:[6,7],genome_diagram:2,help:9,hmm:8,input:7,introduct:9,maximum:5,ml_util:4,modul:[0,1,2,3,4],module_predict:2,overview:8,packag:[2,3,4],pipelin:[0,1],pipeline_tool:[2,3,4],predict:[4,8],prediction_handl:4,primer:9,process:7,profil:8,protein:8,protein_predict:2,rdkit_util:3,scoring_standalone_util:2,screen:5,search:11,sempi:11,seq_util:4,specif:4,structure_predict:2,submodul:[2,3,4],subpackag:2,substructur:5,technic:11,updat:[10,11],usag:6,used:8,websit:9,welcom:11}})