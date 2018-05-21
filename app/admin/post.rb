ActiveAdmin.register Post do
		permit_params :title, :subtitle, :body, :image

		show do |t|
			attributes_table do
				row :title
				row :subtitle
				row :body
			end
		end

		form :html => { :enctype => "multipart/form-data" } do |f|
			f.inputs do
				f.input :title
				f.input :subtitle
				f.input :body
			end
			f.actions
		end
end
