import { get, ref } from "firebase/database";
import { db } from ".";

export interface MemberDTO {
    username: string;
    password: string;
}

export async function readMemberData(): Promise<MemberDTO> {
    const members = await get(ref(db, "members/"));
    return members.toJSON() as MemberDTO;
}
