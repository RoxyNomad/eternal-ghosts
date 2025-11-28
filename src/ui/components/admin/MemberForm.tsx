import ImageUpload from "@/ui/components/admin/ImageUpload";

import { useAdmin } from "@/hooks/useAdmin";

import styles from '@/ui/styles/components/MemberForm.module.scss'

export default function MemberForm() {
	const { members, newMember, handleChange, handleCreate, handleDelete, setUploadedImage } = useAdmin();

	return(
		<div>
			<div className={styles.newMemberForm}>
				<input name="name" placeholder="Name" value={newMember.name} onChange={handleChange} />
				<input name="role" placeholder="Role" value={newMember.role} onChange={handleChange} />
				<input name="imageUrl" placeholder="Image URL" value={newMember.imageUrl} onChange={handleChange} />
				<ImageUpload onUpload={setUploadedImage} />
				<button onClick={handleCreate}>Create Member</button>
			</div>

			<div className={styles.memberList}>
				{members.map((m) => (
					<div key={m.id} className={styles.memberCard}>
						<img src={m.imageUrl} alt={m.name} width={150} />
						<p>{m.name}</p>
						<p>{m.role}</p>
						<button onClick={() => handleDelete(m.id)}>Delete</button>
					</div>
				))}
			</div>
		</div>
	)
}

